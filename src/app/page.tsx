"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import ForecastDays from './components/ForecastDays';
import WeatherMetrics from './components/WeatherMetrics';
import { ForecastDay } from './components/types';
import { WeatherData } from './components/types';
import TeaserScreen from './components/TeaserScreen';
import { motion } from 'framer-motion';

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const [showTeaser, setShowTeaser] = useState(false);

  // Check if user has seen the teaser before
  useEffect(() => {
    const hasSeenTeaser = localStorage.getItem('hasSeenTeaser');
    if (!hasSeenTeaser) {
      setShowTeaser(true);
    }
  }, []);

  const handleDismissTeaser = () => {
    localStorage.setItem('hasSeenTeaser', 'true');
    setShowTeaser(false);
  };

  const fetchWeather = async (city: string) => {
    if (!city.trim()) return;

    setLoading(true);

    let weatherData = null;
    let forecastData = null;

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

      // Current weather data
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      weatherData = await weatherRes.json();

      if (weatherData?.cod?.toString() !== '200') {
        throw new Error(weatherData?.message || 'Unknown error');
      }

      // Forecast data
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );
      forecastData = await forecastRes.json();

      // Process forecast data to get next 3 days
      const nextDays: ForecastDay[] = [];
      const processedDates = new Set();

      forecastData.list.forEach((item: any) => {
        const date = new Date(item.dt * 1000);
        const dateStr = date.toDateString();

        if (!processedDates.has(dateStr) && nextDays.length < 3) {
          processedDates.add(dateStr);
          nextDays.push({
            date: `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`,
            minTemp: item.main.temp_min,
            maxTemp: item.main.temp_max,
            icon: item.weather[0].icon
          });
        }
      });

      setWeather({
        city: weatherData.name,
        country: weatherData.sys?.country ?? '',
        temp: weatherData.main?.temp ?? 0,
        humidity: weatherData.main?.humidity ?? 0,
        description: weatherData.weather?.[0]?.description ?? '',
        icon: weatherData.weather?.[0]?.icon ?? '01d',
        windSpeed: weatherData.wind?.speed ?? 0,
        forecast: nextDays
      });
    } catch (error) {
      console.error('Error fetching weather:', error);
      alert('Failed to fetch weather data. Please check the city name and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUnitChange = (newUnit: 'C' | 'F') => {
    setUnit(newUnit);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4 md:p-8">
      <Head>
        <title>Weather App</title>
      </Head>

      {showTeaser && <TeaserScreen onDismiss={handleDismissTeaser} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showTeaser ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-md mx-auto"
      >
        {/* Search Area */}
        <SearchBar
          onSearch={fetchWeather}
          isLoading={loading}
          unit={unit}
          onUnitChange={handleUnitChange}
        />

        {weather && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Current Weather Section */}
            <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CurrentWeather
                city={weather.city}
                country={weather.country}
                temp={weather.temp}
                description={weather.description}
                icon={weather.icon}
                unit={unit}
              />
            </div>

            {/* Forecast Section */}
            <div className="p-6">
              <ForecastDays
                forecast={weather.forecast}
                unit={unit}
              />
            </div>

            {/* Additional Weather Info */}
            <div className="p-6 pt-0">
              <WeatherMetrics
                windSpeed={weather.windSpeed}
                humidity={weather.humidity}
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
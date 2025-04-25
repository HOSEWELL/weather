import React from 'react';
import WeatherIcons from './WeatherIcons';
import { ForecastDay } from './types';

interface ForecastDaysProps {
  forecast: ForecastDay[];
  unit: 'C' | 'F';
}

const ForecastDays: React.FC<ForecastDaysProps> = ({ forecast, unit }) => {
  const formatTemp = (kelvin: number) => {
    const celsius = kelvin - 273.15;
    return unit === 'C' ? celsius.toFixed(0) : (celsius * 9/5 + 32).toFixed(0);
  };

  return (
    <div className="flex justify-between">
      {forecast.map((day, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="font-medium text-gray-600">{day.date}</div>
          <div className="my-2">
            <WeatherIcons iconCode={day.icon} size="md" />
          </div>
          <div className="text-sm font-medium">
            {formatTemp(day.minTemp)}-{formatTemp(day.maxTemp)}°{unit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastDays;
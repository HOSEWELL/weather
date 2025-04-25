import React from "react";
import WeatherIcons from './WeatherIcons';
import { formatDateOnly } from '../utils/dateFormatter';

interface CurrentWeatherProps {
  city: string;
  country: string;
  temp: number;
  description: string;
  icon: string;
  unit: 'C' | 'F';
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ 
  city, 
  country, 
  temp, 
  description, 
  icon, 
  unit
}) => {
  const formatTemp = (kelvin: number) => {
    const celsius = kelvin - 273.15;
    return unit === 'C' ? celsius.toFixed(0) : (celsius * 9/5 + 32).toFixed(0);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-lg mb-1">{formatDateOnly(new Date())}</div>
      <div className="text-xl font-medium mb-4">
        {city}, {country}
      </div>
      
      <WeatherIcons iconCode={icon} size="xl" />
      
      <div className="mt-4 text-5xl font-bold">
        {formatTemp(temp)}°{unit}
      </div>
      <div className="mt-2 text-xl capitalize">
        {description}
      </div>
    </div>
  );
};

export default CurrentWeather;
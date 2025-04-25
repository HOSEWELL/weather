// src/app/components/types.ts
export interface ForecastItem {
  dt: number;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

export interface ForecastDay {
  date: string;
  minTemp: number;
  maxTemp: number;
  icon: string;
}

export interface WeatherData {
  city: string;
  country: string;
  temp: number;
  humidity: number;
  description: string;
  icon: string;
  windSpeed: number;
  forecast: ForecastDay[];
}
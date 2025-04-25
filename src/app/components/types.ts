export interface ForecastDay {
    date: string;
    minTemp: number;
    maxTemp: number;
    icon: string;
  }
  
  // Full weather data object including forecast
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
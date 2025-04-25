import React from 'react';

interface WeatherMetricsProps {
  windSpeed: number;
  humidity: number;
}


const WeatherMetrics: React.FC<WeatherMetricsProps> = ({ 
  windSpeed, 
  humidity 
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="text-gray-600 mb-2">Wind Status</div>
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-2">{windSpeed.toFixed(1)} km/h</div>
          
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="text-gray-600 mb-2">Humidity</div>
        <div className="text-2xl font-bold mb-2">{humidity}%</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full" 
            style={{ width: `${humidity}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherMetrics;
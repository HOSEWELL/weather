import React from 'react';

interface WeatherIconProps {
  iconCode: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const WeatherIcons: React.FC<WeatherIconProps> = ({ iconCode, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
    xl: 'w-20 h-20',
  };
  
  const sizeCls = sizeClasses[size];

  // Sunny icon
  if (iconCode === '01d') {
    return (
      <svg className={sizeCls} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="5" stroke="black" strokeWidth="2" />
        <path d="M12 2V4" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 20V22" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M4.22 4.22L5.64 5.64" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M18.36 18.36L19.78 19.78" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 12H4" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 12H22" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M4.22 19.78L5.64 18.36" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M18.36 5.64L19.78 4.22" stroke="black" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  
  // Clear night icon
  if (iconCode === '01n') {
    return (
      <svg className={sizeCls} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  // Cloud icon (for partly cloudy, cloudy, broken clouds)
  if (iconCode === '02d' || iconCode === '03d' || iconCode === '04d' || 
      iconCode === '02n' || iconCode === '03n' || iconCode === '04n') {
    return (
      <svg className={sizeCls} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 15C3 17.7614 5.23858 20 8 20H16C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10H15.9C15.9647 9.67139 16 9.33929 16 9C16 6.23858 13.7614 4 11 4C8.23858 4 6 6.23858 6 9C6 9.33929 6.03533 9.67139 6.1 10H6C3.23858 10 1 12.2386 1 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  // Rain icon
  if (iconCode.includes('09') || iconCode.includes('10')) {
    return (
      <svg className={sizeCls} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 15C3 17.7614 5.23858 20 8 20H16C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10H15.9C15.9647 9.67139 16 9.33929 16 9C16 6.23858 13.7614 4 11 4C8.23858 4 6 6.23858 6 9C6 9.33929 6.03533 9.67139 6.1 10H6C3.23858 10 1 12.2386 1 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 18V21" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 18V21" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 18V21" stroke="black" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  
  // Thunderstorm icon
  if (iconCode.includes('11')) {
    return (
      <svg className={sizeCls} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 15C3 17.7614 5.23858 20 8 20H16C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10H15.9C15.9647 9.67139 16 9.33929 16 9C16 6.23858 13.7614 4 11 4C8.23858 4 6 6.23858 6 9C6 9.33929 6.03533 9.67139 6.1 10H6C3.23858 10 1 12.2386 1 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 14L9 20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 20L11 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  
  // Snow icon
  if (iconCode.includes('13')) {
    return (
      <svg className={sizeCls} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 15C3 17.7614 5.23858 20 8 20H16C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10H15.9C15.9647 9.67139 16 9.33929 16 9C16 6.23858 13.7614 4 11 4C8.23858 4 6 6.23858 6 9C6 9.33929 6.03533 9.67139 6.1 10H6C3.23858 10 1 12.2386 1 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 20L8 23" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 19L12 22" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 20L16 23" stroke="black" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  
  // Mist/Fog icon
  if (iconCode.includes('50')) {
    return (
      <svg className={sizeCls} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8H5M7 8H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 16H5M7 16H9M11 16H13M15 16H17M19 16H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  
  // Default/fallback icon
  return (
    <svg className={sizeCls} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
      <path d="M12 7V12" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="black" />
    </svg>
  );
};

export default WeatherIcons;
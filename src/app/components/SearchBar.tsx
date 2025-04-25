import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
  unit: 'C' | 'F';
  onUnitChange: (unit: 'C' | 'F') => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading, unit, onUnitChange }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-2 mb-8">
      <input
        type="text"
        placeholder="Search city,country...."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? (
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      <div className="flex rounded-lg border border-gray-300 overflow-hidden">
        <button 
          className={`px-3 py-1 ${unit === 'C' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
          onClick={() => onUnitChange('C')}
        >
          °C
        </button>
        <button 
          className={`px-3 py-1 ${unit === 'F' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
          onClick={() => onUnitChange('F')}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
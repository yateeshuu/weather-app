// Weather.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDetails from './WeatherDetails';
import './Weather.css';

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState<string>('');
  const [error, setError] = useState<string>('');
  const apiKey = 'defc422621322fd3b94d5741dd5a32bc'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name');
      return;
    }

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
    }
  };

  useEffect(() => {
    // Optional: Fetch weather data on initial load (uncomment if desired)
    // fetchWeather();
  }, []);

  return (
    <div className="weather-container">
      <h2>Weather Information</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherDetails weather={weather} />}
    </div>
  );
};

export default Weather;

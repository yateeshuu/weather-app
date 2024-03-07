// WeatherDetails.tsx
import React from 'react';
import './Weather.css';

const WeatherDetails: React.FC<{ weather: any }> = ({ weather }) => {
  // Define colors for each detail card
  const detailColors = {
    Temperature: '#3498db',
    Feels_Like: '#2ecc71',
    Description: '#e74c3c',
    Humidity: '#9b59b6',
    Wind: '#f39c12',
    Visibility: '#1abc9c',
  };

  return (
    <div className="weather-details">
      <h3 className="location">{weather.name}, {weather.sys.country}</h3>
      <div className="detail-container">
        <div className="detail-card" style={{ backgroundColor: detailColors['Temperature'] }}>
          <p className="detail-title">Temparature</p>
          <p className="detail-value">{weather.main.temp}°C</p>
        </div>
        <div className="detail-card" style={{ backgroundColor: detailColors['Feels_Like'] }}>
          <p className="detail-title">Feels Like</p>
          <p className="detail-value">{weather.main.feels_like}°C</p>
        </div>
        <div className="detail-card" style={{ backgroundColor: detailColors['Description'] }}>
          <p className="detail-title">Description</p>
          <p className="detail-value">{weather.weather[0].description}</p>
        </div>
        <div className="detail-card" style={{ backgroundColor: detailColors['Humidity'] }}>
          <p className="detail-title">Humidity</p>
          <p className="detail-value">{weather.main.humidity}%</p>
        </div>
        <div className="detail-card" style={{ backgroundColor: detailColors['Wind'] }}>
          <p className="detail-title">Wind</p>
          <p className="detail-value">{weather.wind.speed} m/s, {weather.wind.deg}°</p>
        </div>
        <div className="detail-card" style={{ backgroundColor: detailColors['Visibility'] }}>
          <p className="detail-title">Visibility</p>
          <p className="detail-value">{weather.visibility / 1000} km</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

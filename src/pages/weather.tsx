// src/pages/weather.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';



const WeatherPage: React.FC = () => {
  const router = useRouter();
  const { weatherData,city } = router.query;

  if (!weatherData || !city) {
    return <p>Loading...</p>;
  }

  const { description, temperature, icon } = JSON.parse(weatherData as string);

  const randomValue = Math.floor(Math.random() * 6);

  const backgroundImage =`/assets/${randomValue}.png`; 
  
  const containerStyle: React.CSSProperties = {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${backgroundImage})`,
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '0 0 5px black',
  };

  const iconStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentStyle}>
        <h1>{city}</h1>
        <h1>{description}</h1>
        <p>Temperature: {temperature}°C</p>
        <img src={icon} alt={description} style={iconStyle} />
      </div>
    </div>
  );
};

export default WeatherPage;

// src/pages/index.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/router';
import LocationSearch from '../components/LocationSearch';
import Header from '../components/Header';
import Facts from '../components/Facts'; // Import the Facts component

const HomePage: React.FC = () => {
  const router = useRouter();

  const fetchWeatherData = async (url: string, city: string) => {
    const response = await fetch(url);
    const data = await response.json();
    const weatherData = {
      description: data.weather[0].description,
      temperature: data.main.temp,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

    router.push({
      pathname: '/weather',
      query: { weatherData: JSON.stringify(weatherData),city },
    });
  };

  const handleSearch = (city: string) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetchWeatherData(url,city);
  };

  const handleGetLocation = (latitude: number, longitude: number) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    fetchWeatherData(url,'');
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <Header />
      <LocationSearch onSearch={handleSearch} onGetLocation={handleGetLocation} />
      <div
        style={{
          position: 'absolute', // Use 'absolute' to position it within the parent
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: `url('/assets/Background-image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        style={{
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black', // Adjust text color as needed
          textAlign: 'left',
          padding: '10px',
          background: 'rgba(0, 0, 0, 0.5)', // Optional: Add background for readability
          
          borderRadius: '8px',
        }}
      >
        <Facts /> {/* Display Facts component in the middle of the background image */}
      </div>
    </div>
  );
};

export default HomePage;

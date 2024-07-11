import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LocationSearch from '../components/LocationSearch';
import Header from '../components/Header';
import Facts from '@/components/facts';
import Loading from '@/components/loading'; // Import the Loading component

const HomePage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State for loading indicator

  const fetchWeatherData = async (url: string, city: string) => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const response = await fetch(url);
      const data = await response.json();
      const weatherData = {
        description: data.weather[0].description,
        temperature: data.main.temp,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      };

      router.push({
        pathname: '/weather',
        query: { weatherData: JSON.stringify(weatherData), city },
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const handleSearch = (city: string) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetchWeatherData(url, city);
  };

  const handleGetLocation = (latitude: number, longitude: number) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    fetchWeatherData(url, '');
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <Header />
      <LocationSearch onSearch={handleSearch} onGetLocation={handleGetLocation} />
      {loading && <Loading />} {/* Render Loading component when loading is true */}
      <div
        style={{
          position: 'absolute',
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
          color: 'black',
          textAlign: 'left',
          padding: '10px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '8px',
        }}
      >
        <Facts /> {/* Display Facts component in the middle of the background image */}
      </div>
    </div>
  );
};

export default HomePage;

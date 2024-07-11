// src/components/LocationSearch.tsx
'use client';
import React, { useState } from 'react';
import { CiTrophy } from 'react-icons/ci';
import { FaLocationArrow } from 'react-icons/fa';
import { PiX } from 'react-icons/pi';
interface LocationSearchProps {
  onSearch: (city: string) => void;
  onGetLocation: (latitude: number, longitude: number) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onSearch, onGetLocation }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    onSearch(city);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onGetLocation(latitude, longitude);
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };
  

   return (
    <div style={styles.container}>
      <span style={styles.locationText} onClick={handleLocationClick}>
        Current Location
      </span>
      <FaLocationArrow style={styles.icon} onClick={handleLocationClick} />
      
      <input
        type="text"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.searchBar}
      />
      <button onClick={handleSearchClick} style={styles.button}>
        Get Weather
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '24px',
    marginRight: '10px',
    cursor: 'pointer',
  },
  searchBar: {
    marginRight: '10px',
    padding: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '5px 10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  locationText: { // Add this style definition
    marginRight: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default LocationSearch;

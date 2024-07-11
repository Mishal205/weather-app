// src/components/Header.tsx
'use client';
import React from 'react';
import { FaSun } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <div style={styles.header}>
      <FaSun style={styles.icon} />
      <div style={styles.title}>Weather</div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  icon: {
    fontSize: '24px',
    marginRight: '10px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
};

export default Header;

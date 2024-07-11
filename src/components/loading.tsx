// components/Loading.tsx

import React from 'react';
import styles from './Loading.module.css'; // Import CSS module for styling

const Loading: React.FC = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingSpinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;

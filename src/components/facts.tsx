// src/components/Facts.tsx
import React, { useState, useEffect } from 'react';

const weatherFacts = [
    {
      fact: "Highest Recorded Temperature",
      detail: "The highest temperature ever recorded on Earth was 134 degrees Fahrenheit (56.7 degrees Celsius) in Furnace Creek Ranch, Death Valley, California, USA on July 10, 1913."
    },
    {
      fact: "Lowest Recorded Temperature",
      detail: "The lowest temperature ever recorded was -128.6 degrees Fahrenheit (-89.2 degrees Celsius) at the Soviet Union's Vostok Station in Antarctica on July 21, 1983."
    },
    {
      fact: "Lightning Strikes",
      detail: "Around 100 lightning bolts strike the Earth's surface every second. This amounts to about 8 million lightning strikes per day."
    },
    {
      fact: "Tornado Speed",
      detail: "Tornadoes can reach wind speeds of up to 300 miles per hour (480 kilometers per hour), making them one of the most powerful natural phenomena on Earth."
    },
    {
      fact: "Hurricane Names",
      detail: "Hurricanes and tropical storms are named to help identify and track them. The names are chosen from six lists maintained by the World Meteorological Organization, alternating between male and female names."
    },
    {
      fact: "Rainiest Place on Earth",
      detail: "Mawsynram, a village in Meghalaya, India, holds the record for being the wettest place on Earth, with an average annual rainfall of around 467.4 inches (11,871 millimeters)."
    },
    {
      fact: "Weather on Other Planets",
      detail: "Venus has extremely high temperatures due to its thick atmosphere of carbon dioxide, while Mars experiences dust storms that can cover the entire planet."
    },
    {
      fact: "Rainbows",
      detail: "Rainbows are caused by the reflection, refraction, and dispersion of light in water droplets, resulting in a spectrum of light appearing in the sky."
    },
    {
      fact: "Frost Quakes",
      detail: "Frost quakes, or cryoseisms, occur when sudden temperature drops cause moisture in the ground to freeze rapidly, leading to small explosions that resemble minor earthquakes."
    },
    {
      fact: "Storm Chasing",
      detail: "Storm chasing is a hobby and scientific pursuit where individuals follow severe weather systems, such as tornadoes and hurricanes, to study and document their behavior."
    }
  ];

  

const Facts: React.FC = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [currentFact, setCurrentFact] = useState(weatherFacts[currentFactIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update fact index to transition to the next fact
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % weatherFacts.length);
    }, 5000); // Change fact every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update currentFact when currentFactIndex changes
    setCurrentFact(weatherFacts[currentFactIndex]);
  }, [currentFactIndex]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50px', // Adjust as needed
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: '100%',
        zIndex: 10,
      }}
    >
      <h2>Random Weather Fact</h2>
      <p>{currentFact.fact}</p>
      <p>{currentFact.detail}</p>
    </div>
  );
};

export default Facts;

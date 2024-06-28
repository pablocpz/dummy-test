'use client';

import { useEffect, useState } from 'react';

interface Criminal {
  name: string;
  images: string[];
}

export default function CriminalsList() {
  const [criminals, setCriminals] = useState<Criminal[]>([]);

  useEffect(() => {
    fetch('https://browser-demo-beta.xyz/list-criminals/')
      .then(response => response.json())
      .then(data => setCriminals(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ul>
      {criminals.map((criminal, index) => (
        <li key={index}>
          <p>{criminal.name}</p>
          {criminal.images && criminal.images.length > 0 && (
            <img src={criminal.images[0]} alt={criminal.name} style={{maxWidth: '100px'}} />
          )}
        </li>
      ))}
    </ul>
  );
}
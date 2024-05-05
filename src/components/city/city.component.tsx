"use client";

import { useEffect, useState } from "react";

export function YourCityComponent() {
  const [city, setCity] = useState('');

  useEffect(() => {
    async function fetchCity() {
      const response = await fetch('/api/city');
      setCity(await response.text());
    }

    fetchCity();
  }, []);

  return (
    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      Your city is: {city}
    </p>
  );
}

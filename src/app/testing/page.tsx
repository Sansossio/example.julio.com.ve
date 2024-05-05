"use client";

import { useEffect, useState } from "react";


export default function TestingPage() {
  const [city, setCity] = useState('');

  useEffect(() => {
    async function fetchCity() {
      const response = await fetch('/api/city');
      setCity(await response.text());
    }

    fetchCity();
  }, []);

  return (
    <>
      <h1>Testing Component</h1>
      <p>This is a testing component.</p>
      <p>City is: {city}</p>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./config";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function SupabasePage() {
  const [countries, setCountries] = useState<any[] | null>([]);
  const [countriesFromServer, setCountriesFromServer] = useState<any[] | null>([]);

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    async function getCountriesFromServer() {
      const response = await fetch("/supabase/countries");
      const data = await response.json();
      setCountriesFromServer(data as any);
    }

    getCountriesFromServer();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <>
      <div>
        <h3>From client</h3>
        <ul>
          {countries?.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h3>From server</h3>
        <ul>
          {countriesFromServer?.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

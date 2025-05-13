import React, { useEffect, useState } from "react";

function WeatherDisplay({ city }) {
  const [weather, setWeather] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (!city) 
        return;

    async function fetchWeather() {
      try {
        setErro(null);
        setWeather(null);

        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          throw new Error("Cidade não encontrada.");
        }

        const { latitude, longitude } = geoData.results[0];

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const weatherData = await weatherRes.json();

        setWeather(weatherData.current_weather);
      } 
      
      catch (err) {
        setErro(err.message);
      }
    }

    fetchWeather();
  }, [city]);

  if (erro) 
    return <p style={{ color: "red" }}>Erro: {erro}</p>;

  if (!weather) 
    return <p>Carregando dados do clima...</p>;

  return (
    <div>
      <h2>Clima atual</h2>
      <p>Temperatura: {weather.temperature}°C</p>
      <p>Velocidade do vento: {weather.windspeed} km/h</p>
      <p>Condição: {weather.weathercode}</p>
    </div>
  );
}

export default WeatherDisplay;
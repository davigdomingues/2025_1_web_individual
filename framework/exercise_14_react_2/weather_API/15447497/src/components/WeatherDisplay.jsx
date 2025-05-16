import React, { useEffect, useState } from "react";

function WeatherDisplay({ city }) {
  const [weather, setWeather] = useState(null);
  const [erro, setErro] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const weatherDescriptions = {
    0: "Céu limpo",
    1: "Principalmente limpo",
    2: "Parcialmente nublado",
    3: "Encoberto",
    45: "Névoa",
    48: "Névoa com geada",
    51: "Chuvisco leve",
    53: "Chuvisco moderado",
    55: "Chuvisco denso",
    61: "Chuva fraca",
    63: "Chuva moderada",
    65: "Chuva intensa",
    80: "Pancadas de chuva",
    95: "Trovoadas",
    99: "Tempestades com granizo",
  };

  useEffect(() => {
    if (!city) {
      // Se não tem cidade, não mostra nada nem mensagem
      setWeather(null);
      setErro(null);
      setIsLoading(false);
      return;
    }

    async function fetchWeather() {
      try {
        setErro(null);
        setWeather(null);
        setIsLoading(true);

        if (!/^[a-zA-Z\sÀ-ÿ]+$/.test(city)) {
          throw new Error("Nome de cidade inválido.");
        }

        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
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
      } catch (err) {
        setErro(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  if (!city) return null; // ou pode exibir um texto inicial, tipo "Digite uma cidade"

  if (erro) return <p className="erro">Erro: {erro}</p>;
  if (isLoading) return <p className="loading">Carregando dados do clima...</p>;
  if (!weather) return null; // enquanto não chegou nenhum dado e não está carregando

  return (
    <div className="weather-container">
      <h2>Clima atual</h2>
      <p>Temperatura: {weather.temperature}°C</p>
      <p>Velocidade do vento: {weather.windspeed} km/h</p>
      <p>Condição: {weatherDescriptions[weather.weathercode] || "Desconhecida"}</p>
    </div>
  );
}

export default WeatherDisplay;
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

function App() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");

  return (
    <div className="App">
      <h1>Previsão do Tempo</h1>
      <SearchBar onSearch={setCidadeSelecionada} />
      <WeatherDisplay city={cidadeSelecionada} />
    </div>
  );
}

export default App;
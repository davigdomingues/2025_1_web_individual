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

/*Observação:
A API da Open-Meteo usa um serviço de geocodificação que tenta interpretar qualquer string de entrada como um possível nome de lugar. Ela realiza buscas aproximadas e muitas vezes aceita palavras que:

São nomes ambíguos (por exemplo, "Março" pode coincidir com nomes de vilas ou sobrenomes).

Existem como topônimos reais em algum lugar do mundo, mesmo que pouco conhecidos.

Parecem letras ou siglas usadas em mapas.

Exemplos:
"Janeiro": Pode ser interpretado como "Rio de Janeiro", "Janeiro de Baixo" (em Portugal), etc.

"Março": Existe como topônimo em alguns países de língua espanhola ou italiana.

"hhh": Pode bater com algum código de lugar (por exemplo, código IATA, nome de local não oficial, etc.).
*/

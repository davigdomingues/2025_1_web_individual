import React, { useState, useEffect } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer); // Limpa o timeout se o componente desmontar.
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
      setError(""); // Limpa após o sucesso do envio da cidade.
    } else {
      setError("Por favor, digite o nome de uma cidade.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Digite o nome da cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">Buscar</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default SearchBar;
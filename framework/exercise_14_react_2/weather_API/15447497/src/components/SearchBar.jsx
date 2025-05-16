import React, { useState } from "react";

function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        if (city.trim() !== "") {
            onSearch(city);
            setCity("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Digite o nome da cidade" 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
            />
        </form>
    );
}
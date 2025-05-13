import React, {useState} from "react";

function SearchBar({onSearch}) {
    const[city, setCity] = useState("");

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSearch(city);
            setCity("");   
        }
    }

    return (
        <input 
            type="text" 
            placeholder="Digite o nome da cidade" 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}/>
    );
}

export default SearchBar;
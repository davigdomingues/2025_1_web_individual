import React, { useState } from "react";
import Results from "./Results";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const data = [
    "Maçã", "Damasco", "Abacate", "Banana", "Amora-preta",
    "Mirtilo", "Amora-silvestre", "Melão Cantalupo", "Cereja", "Clementina",
    "Coco", "Oxicoco", "Groselha", "Tâmara", "Pitaia",
    "Durian", "Elderberry (Sabugueiro)", "Feijoa", "Figo", "Goji Berry",
    "Groselha-espinhosa", "Toranja", "Uvas", "Goiaba", "Melão",
    "Jaca", "Jambul (Jamelão)", "Jujuba", "Kiwi", "Kumquat (Laranja Kinkan)",
    "Limão", "Lima", "Longan", "Nêspera", "Lichia",
    "Mandarim", "Manga", "Mangostão", "Amora", "Nectarina",
    "Laranja", "Mamão", "Maracujá", "Pêssego", "Pêra",
    "Caqui", "Abacaxi", "Ameixa", "Romã", "Framboesa"
  ];

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="resultado">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Buscar..."
        className="barra-de-pesquisa"
      />
      <Results items={filteredData} />
    </div>
  );
};

export default SearchBar;
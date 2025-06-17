import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Countries = () => {
  // axios me permet de faire des requêtes HTTP depuis le navigateur ou Node.js  ( npm install axios )

  // le useEffect se joue quand le composant est monté ( c'est a dire lorsque le composant et ajouté au DOM ) le [] est un calllback qui se joue une seule fois

  // data va permetre de stocker les données recupérées depuis l'API
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    // remarque axios transforme direct le json en objet javascript , pas besoin de faire un json.parse
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,translations,continents"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {/* je genere directement les radios depuis le tableau radios avec la methode map  */}
        {radios.map((continent) => {
          return (
            <li key={continent}>
              <input
                type="radio"
                id={continent}
                checked={continent === selectedRadio}
                name="continentRadio"
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              {/* chacun des radios a un label qui lui est associé  */}
              <label htmlFor={continent}>{continent}</label>
            </li>
          );
        })}
      </ul>
      {/* ici je dis si selectedRadio est true alors j'affiche le bouton annuler la recherche  */}
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {/* petit rappelle j'appelle 'country' chaque element du tableau data qui on tous une clé unique  */}
        {/* les composants enfant ne connaissent pas les données de leur parent, ils doivent donc recevoir les données en tant que props  par contre un enfant ne peux pas passer ses données a un parent ou a u nautre enfant*/}
        {/* pour cela que country passe ses données a Card  */}
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;

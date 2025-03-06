import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Countries = () => {
  // axios me permet de faire des requêtes HTTP depuis le navigateur ou Node.js  ( npm install axios )

  // le useEffect se joue quand le composant est monté ( c'est a dire lorsque le composant et ajouté au DOM ) le [] est un calllback qui se joue une seule fois

  // data va permetre de stocker les données recupérées depuis l'API
  const [data, setData] = useState([]);

  useEffect(() => {
    // remarque axios transforme direct le json en objet javascript , pas besoin de faire un json.parse
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="countries">
      <h1>Countries</h1>
      <ul>
        {/* petit rappelle j'appelle country chaque element du tableau data  */}
        {/* est ils-doivent tous avoir une clé unique  */}
        {/* les composants enfant ne connaissent pas les données de leur parent, ils doivent donc recevoir les données en tant que props  par contre un enfant ne peux pas passer ses données a un parent ou a u nautre enfant*/}
        {/* pour cela que country passe ses données a Card  */}
        {data.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;

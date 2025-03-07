import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import axios from "axios";
import Article from "../components/Article";
const Blog = () => {
  // je crée un state pour stocker les articles de mon blog
  const [blogData, setBlog] = useState([]);
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const getData = () => {
    // j'indique quelle url je veux appeler
    axios
      .get("http://localhost:5000/articles")
      // si la requete est un succes alors je stocke les données dans mon state
      .then((res) => setBlog(res.data));
  };
  // quand le composant sera  monté tu jouras...
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content.length < 140) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Nom" />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          // je recupere le contenu de l'input grace a la fonction setContent qui est appeler dans l'evenement onChangeCapture"
          onChangeCapture={(e) => setContent(e.target.value)}
        ></textarea>
        {/* error est-ce qu'il est true ? si il est true alors on affiche le message d'erreur */}
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData.map((article) => (
          // j'appelle mon composant article et je lui passe en props les données de mon article
          // petit memo article a gauche nom de la props et article a droite nom de la variable qui contien les infor ( id , title , content )
          <Article key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default Blog;

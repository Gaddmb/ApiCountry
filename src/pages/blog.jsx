import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import axios from "axios";
import Article from "../components/Article";
const Blog = () => {
  // je crée un state pour stocker les articles de mon blog
  const [blogData, setBlog] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const getData = () => {
    // j'indique quelle url je veux appeler
    axios
      .get("http://localhost:3004/articles")
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
      // j'envoie les données de mon formulaire au serveur
      // je lui envoie un objet avec les données de mon formulaire (author,content,date)
      // je lui envoie un objet avec les données de mon formulaire (author,content,date) et je lui indique l'url de destination
      axios.post("http://localhost:3004/articles", {
        author: author,
        content: content,
        date: Date.now(),
      });
      setError(false);
      setAuthor("");
      setContent("");
      // le getdata permet de rafraichir la page et de voir le nouvel article
      getData();
    }
  };

  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          // value permet de definir la valeur de l'input (author) et de la mettre a jour en temps reel
          value={author}
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          // je recupere le contenu de l'input grace a la fonction setContent qui est appeler dans l'evenement onChangeCapture"
          onChange={(e) => setContent(e.target.value)}
          // meme chose que pour l'input mais pour le textarea
          value={content}
        ></textarea>
        {/* error est-ce qu'il est true ? si il est true alors on affiche le message d'erreur */}
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((article) => (
            // j'appelle mon composant article et je lui passe en props les données de mon article
            // petit memo article a gauche nom de la props et article a droite nom de la variable qui contien les infor ( id , title , content )
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default Blog;

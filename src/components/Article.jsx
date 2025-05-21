import React, { useState } from "react";
import axios from "axios";

// je recupere les données de mon article grace a la props article
const Article = ({ article }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };

  const handleEdit = () => {
    // je fais un objet ou je vais passer toute les données édité par l'utilisateur pour les envoyer au serveur et les mettre a jour dans la base de données
    const data = {
      author: article.author,
      // je fais une condition ternaire pour savoir si l'utilisateur a édité le contenu de l'article
      content: editContent ? editContent : article.content,
      date: article.date,
      // dans ma base de  données quand est-ce que ca ete modifié
      updatedDate: Date.now(),
    };

    // si il souhaite faire un update prend le lien suivant et envoie les données de mon objet data puis une fois que cela et fait je fais un then pour changer l'etat de mon isEditing
    axios.put("http://localhost:3004/articles/" + article.id, data).then(() => {
      setIsEditing(false);
    });
  };

  const handleDelete = () => {
    // je fais une requete delete pour supprimer un article
    axios.delete("http://localhost:3004/articles/" + article.id);
    // je rafraichis la page pour voir que l'article a bien été supprimé
    window.location.reload();
  };

  return (
    <div
      className="article"
      // meme chose je fais une ternaire pour savoir si l'utilisateur est entrain d'éditer un article si oui alors je change la couleur de fond de mon article
      style={{ background: isEditing ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateFormater(article.date)}</em>
      </div>
      {isEditing ? (
        <textarea
          // est-ce qu'il y a quelque chose dans editContent ? si oui alors je met editContent sinon je met article.content
          defaultValue={editContent ? editContent : article.content}
          autoFocus
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{editContent ? editContent : article.content}</p>
      )}

      <div className="btn-container">
        {isEditing ? (
          <button onClick={() => handleEdit()}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button
          onClick={() => {
            if (
              window.confirm("Voulez-vous vraiment supprimer cet article ?")
            ) {
              // sinon j'aimerais que tu me joeus la fonction handleDelete
              handleDelete();
            }
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Article;

// app est ma page principale, elle va contenir les pages de l'application

import React from "react";
// me permet de gere la navigation dans l'application
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/blog";

// en faisant RSC dans un fichier react , on obtient le code suivant: ainsi que l'import de React
const App = () => {
  return (
    //  browserRouter, Routes , Route  vont me permettre de gerer la navigation dans l'application
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* si URL n'est pas trouvé, on redirige vers la page d'accueil */}
        <Route path="*" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

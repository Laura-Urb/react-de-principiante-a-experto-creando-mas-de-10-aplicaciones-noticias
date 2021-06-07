import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Noticias from "./components/Noticias";

function App() {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=41ccbcd371644a398e9dcea45ebc65e9`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    };

    consultarApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias"></Header>
      <div className="container white">
        <Formulario setCategoria={setCategoria}></Formulario>
        <Noticias noticias={noticias}></Noticias>
      </div>
    </Fragment>
  );
}

export default App;

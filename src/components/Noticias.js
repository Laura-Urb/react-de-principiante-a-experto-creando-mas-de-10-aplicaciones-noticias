import React from "react";
import Noticia from "./Noticia";
import PropTypes from 'prop-types';

const Noticias = ({ noticias }) => {
  return (
    <div className="row">
      {noticias.map((noticia) => (
        <Noticia key={noticia.url} noticia={noticia}></Noticia>
      ))}
    </div>
  );
};

export default Noticias;

Noticias.prototype = {
    noticias: PropTypes.array.isRequired
}


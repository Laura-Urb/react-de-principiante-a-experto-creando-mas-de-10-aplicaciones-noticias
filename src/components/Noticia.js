import React from "react";
import PropTypes from 'prop-types';

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  const imagen = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title}></img>
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {imagen}

        <div className="card-content">
          <h3>{title}</h3>
          <h3>{description}</h3>
        </div>

        <div className="card-action">
          <a
            heref={url}
            target="_blank"
            rel="nooopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver Noticia Completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;

Noticia.prototype = {
    noticia: PropTypes.object.isRequired
}

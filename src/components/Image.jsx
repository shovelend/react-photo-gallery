import React from 'react';
import PropTypes from 'prop-types';

import './Image.css';

// TODO: attribution, e.g. Photo by Greg Rakozy on Unsplash
export default function Image({ src, alt, caption }) {
  return (
    <figure className="Figure">
      <img className="Image" src={src} alt={alt} />
      {caption && <figcaption className="Caption">{caption}</figcaption>}
    </figure>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
};

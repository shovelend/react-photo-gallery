import React from 'react';

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

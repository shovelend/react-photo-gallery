import React from 'react';

import './Signature.css';

export default function Signature({ author, role, division, company }) {
  return (
    <footer className="Signature">
      {author && <div>— {author} </div>}
      {role && <div> {role} </div>}
      {division && <div> {division} </div>}
      {company && <div> {company} </div>}
    </footer>
  );
}

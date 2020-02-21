import React from 'react';

import './styles.css';

export default function Button({ label, operator, spanTwo, spanThree, equal, click }) {

  return (
        <button
          onClick={e => click(label)}
          className={`
          button
          ${operator ? 'operator' : ''}
          ${spanTwo ? 'span-two' : ''}
          ${spanThree ? 'span-three' : ''}
          ${equal ? 'equal' : ''}
        `}

        >{label}</button>
  );
}

import React from 'react';

interface Props {
    name: string
}

export const SportName = ({ name } :Props) => {

  return (
        <div >
          <p style={{ color: 'black'}}>{name}</p>
        </div>
      )
}
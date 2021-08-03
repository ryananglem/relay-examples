import React from 'react';

interface Props {
    name: string
}

export const SportName = ({ name } :Props) => {

  return (
      
        <div>
          <p>{name}</p>
        </div>
      )
}
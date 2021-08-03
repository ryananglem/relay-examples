import React from 'react';

interface Props {
    name: string
}

export const SportName = ({ name } :Props) => {

  return (
      <header className="App-header">
        <div>
          <p>{name}</p>
        </div>
      </header>)
}
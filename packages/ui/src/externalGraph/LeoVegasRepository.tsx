import React from 'react';

export const LeoVegasRepository = (props: any) => {

  return (
      <header className="App-header">
        <div>
          <p>{props.data.repository.name} ({props.data.repository.owner.url})</p>
        </div>
      </header>)
}
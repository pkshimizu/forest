import React from 'react'
import {pure} from 'recompose'

import './card.css'


const Card = pure(({file, onLoadFiles}) => {
  const doubleClickHandler = (e) => {
    onLoadFiles(file.uuid);
  };
  return (
    <div className={"card small"} onDoubleClick={doubleClickHandler}>
      <div className={"card-content"}>
        <span className={"card-title"}>{file.name}</span>
      </div>
      <div className={"card-action"}>
      </div>
    </div>
  )
});

export default Card

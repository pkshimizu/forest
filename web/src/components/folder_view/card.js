import React from 'react'
import {pure} from 'recompose'

import './card.css'


const Card = pure(({file}) => {
  return (
    <div className={"card small"}>
      <div className={"card-content"}>
        <span className={"card-title"}>{file.name}</span>
      </div>
      <div className={"card-action"}>
      </div>
    </div>
  )
});

export default Card

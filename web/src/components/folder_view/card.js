import React from 'react'
import {pure} from 'recompose'

import './card.css'


const Card = pure(({file}) => {
  return (
    <div className={"card"}>
      <div className={"card-image"}>
        <div className={"card-title"}>{file.name}</div>
      </div>
      <div className={"card-content"}>
      </div>
      <div className={"card-action"}>
      </div>
    </div>
  )
});

export default Card

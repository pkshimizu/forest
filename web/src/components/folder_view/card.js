import React from 'react'
import {pure} from 'recompose'

import './card.css'
import Link from "react-router/es/Link";


const Card = pure(({file}) => {
  return (
    <Link to={`/files/${file.uuid}`}>
      <div className={"card small"}>
        <div className={"card-content"}>
          <span className={"card-title"}>{file.name}</span>
        </div>
        <div className={"card-action"}>
        </div>
      </div>
    </Link>
  )
});

export default Card

import React from 'react'
import {pure} from 'recompose'

import './card.css'
import Link from "react-router/es/Link";


const Card = pure(({file}) => {
  if (file.type === 'dir') {
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
  }
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

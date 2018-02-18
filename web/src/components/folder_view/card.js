import React from 'react'
import {pure} from 'recompose'

import './card.css'
import Link from "react-router/es/Link";


const Card = pure(({file, openFile}) => {
  const open = (e) => {
    e.preventDefault();
    openFile(file.uuid);
  };
  if (file.type === 'dir') {
    return (
      <div className={"card small"}>
        <Link to={`/files/${file.uuid}`}>
          <div className={"card-content"}>
            <span className={"card-title"}>{file.name}</span>
          </div>
        </Link>
        <div className={"card-action"}>
          <button className={"btn-floating waves-effect waves-light"} onClick={open}>
            <i className="material-icons">play_arrow</i>
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className={"card small"}>
      <div className={"card-content"}>
        <span className={"card-title"}>{file.name}</span>
      </div>
      <div className={"card-action"}>
        <button className={"btn-floating waves-effect waves-light"} onClick={open}>
          <i className="material-icons">play_arrow</i>
        </button>
      </div>
    </div>
  )
});

export default Card

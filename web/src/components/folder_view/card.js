import React from 'react'
import {pure} from 'recompose'
import ClassNames from 'classnames'

import './card.css'
import Link from "react-router/es/Link";


const Card = pure(({file, selected, openFile, selectFile}) => {
  const open = (e) => {
    e.preventDefault();
    openFile(file.uuid);
  };
  const select = (e) => {
    e.preventDefault();
    selectFile(file.uuid);
  };
  let title = (<span className={"card-title"}>{file.name}</span>);
  if (file.type === 'dir') {
    title = (<Link to={`/files/${file.uuid}`}>{title}</Link>)
  }

  return (
    <div className={"card small"}>
      <div className={"card-content"}>
        {title}
        <button className={"btn-floating waves-effect waves-light open-button"} onClick={open}>
          <i className="material-icons">open_in_new</i>
        </button>
        <button className={ClassNames({
          "btn-floating": true,
          "waves-effect": true,
          "waves-light": true,
          "select-button": true,
          "selected": selected
        })} onClick={select}>
          <i className="material-icons">check</i>
        </button>
        <button className={"btn-floating waves-effect waves-light menu-button"}>
          <i className="material-icons">menu</i>
        </button>
      </div>
    </div>
  )
});

export default Card

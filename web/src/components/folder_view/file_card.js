import React from 'react'
import {pure} from 'recompose'
import ClassNames from 'classnames'
import {Button, Card} from 'react-materialize'

import './file_card.css'
import Link from "react-router/es/Link";


const FileCard = pure(({file, selected, openFile, selectFile}) => {
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
    <Card className={"small"} title={title}>
      <Button waves="light" floating icon={"open_in_new"} className={"open-button"} onClick={open}/>
      <Button waves="light" floating icon={"check"} className={ClassNames({
        "select-button": true,
        "selected": selected
      })} onClick={select}/>
      <Button waves="light" floating icon={"menu"} className={"menu-button"}/>
    </Card>
  )
});

export default FileCard

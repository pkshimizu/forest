import React from 'react'
import {pure} from 'recompose'
import ClassNames from 'classnames'
import {Button, Card} from 'react-materialize'

import './file_card.css'
import Link from "react-router/es/Link";
import {ContextMenu, ContextMenuProvider, Item, Separator} from "react-contexify";

import "react-contexify/dist/ReactContexify.min.css"

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
    <div>
      <ContextMenuProvider id={`file_context_menu_${file.uuid}`}>
        <Card className={"small"} title={title}>
          <Button waves="light" floating icon={"open_in_new"} className={"open-button"} onClick={open}/>
          <Button waves="light" floating icon={"check"} className={ClassNames({
            "select-button": true,
            "selected": selected
            })} onClick={select}/>
          <Button waves="light" floating icon={"more_vert"} className={"detail-button"}/>
        </Card>
      </ContextMenuProvider>
      <ContextMenu id={`file_context_menu_${file.uuid}`} className={"file_context_menu"} animation={"fade"}>
        <Item><i className={"material-icons"}>edit</i>Rename</Item>
        <Separator/>
        <Item><i className={"material-icons"}>content_copy</i>Copy</Item>
        <Item><i className={"material-icons"}>forward</i>Move</Item>
        <Item><i className={"material-icons"}>delete</i>Delete</Item>
      </ContextMenu>
    </div>
  )
});

export default FileCard

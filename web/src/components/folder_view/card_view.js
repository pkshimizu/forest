import React from 'react'
import {lifecycle} from 'recompose'
import Card from './card'

import './card_view.css'
import Breadcrumbs from "../breadcrumbs";

const pickup_files = (files, types) => {
  let result = [];
  for(let file of files) {
    if (types.indexOf(file.type) >= 0) {
      result.push(file);
    }
  }
  return result;
};

const CardView = lifecycle({
  componentDidMount() {
    this.props.onLoadFiles(this.props.params.uuid);
  },
  componentWillUpdate(nextProps) {
    if (nextProps.params.uuid !== this.props.params.uuid) {
      this.props.onLoadFiles(nextProps.params.uuid);
    }
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearSelectedFile();
    }
  }
})(({current_files, parents, selected_uuids, onOpenFile, selectFile, clearSelectedFile}) => {
  return (
    <div>
      <Breadcrumbs parents={parents}/>
      <div className={"folder-view-main"}>
        <span>Folders</span>
        <div className={"row"}>
          {pickup_files(current_files, ['dir']).map(folder => {
            return (
              <div key={folder.uuid} className={"col s3"}>
                <Card file={folder} openFile={onOpenFile} selectFile={selectFile}
                      selected={selected_uuids.includes(folder.uuid)}
                />
              </div>
            )
          })}
        </div>
        <span>Files</span>
        <div className={"row"}>
          {pickup_files(current_files, ['file', 'other']).map(file => {
            return (
              <div key={file.uuid} className={"col s3"}>
                <Card file={file} openFile={onOpenFile} selectFile={selectFile}
                      selected={selected_uuids.includes(file.uuid)}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
});

export default CardView
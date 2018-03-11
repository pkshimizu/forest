import React from 'react'
import {lifecycle} from 'recompose'
import FileCard from './file_card'

import './card_view.css'
import FilePathBreadcrumbs from "../file_path_breadcrumbs";
import {Col, Row} from "react-materialize";

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
      <FilePathBreadcrumbs parents={parents}/>
      <div className={"folder-view-main"}>
        <span>Folders</span>
        <Row>
          {pickup_files(current_files, ['dir']).map(folder => {
            return (
              <Col s={3} key={folder.uuid}>
                <FileCard file={folder} openFile={onOpenFile} selectFile={selectFile}
                      selected={selected_uuids.includes(folder.uuid)}
                />
              </Col>
            )
          })}
        </Row>
        <span>Files</span>
        <Row className={"row"}>
          {pickup_files(current_files, ['file', 'other']).map(file => {
            return (
              <Col s={3} key={file.uuid}>
                <FileCard file={file} openFile={onOpenFile} selectFile={selectFile}
                      selected={selected_uuids.includes(file.uuid)}
                />
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
});

export default CardView
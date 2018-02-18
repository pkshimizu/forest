import React from 'react'
import {lifecycle} from 'recompose'
import Card from './card'

import './card_view.css'

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
  }
})(({files, onOpenFile}) => {
  return (
    <div>
      <span>Folders</span>
      <div className={"row"}>
        {pickup_files(files.current_files, ['dir']).map(folder => {
          return (
            <div key={folder.uuid} className={"col s3"}>
              <Card file={folder} openFile={onOpenFile}/>
            </div>
          )
        })}
      </div>
      <span>Files</span>
      <div className={"row"}>
        {pickup_files(files.current_files, ['file', 'other']).map(folder => {
          return (
            <div key={folder.uuid} className={"col s3"}>
              <Card file={folder} openFile={onOpenFile}/>
            </div>
          )
        })}
      </div>
    </div>
  )
});

export default CardView
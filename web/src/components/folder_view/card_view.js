import React from 'react'
import {lifecycle} from 'recompose'
import Card from './card'

import './card_view.css'

const CardView = lifecycle({
  componentDidMount() {
    this.props.onLoadFiles(this.props.params.uuid);
  },
  componentWillUpdate(nextProps) {
    if (nextProps.params.uuid !== this.props.params.uuid) {
      this.props.onLoadFiles(nextProps.params.uuid);
    }
  }
})(({files}) => {
  return (
    <div className={"row"}>
      {files.current_files.map(file => {
        return (
          <div key={file.uuid} className={"col s3"}>
            <Card file={file}/>
          </div>
        )
      })}
    </div>
  )
});

export default CardView
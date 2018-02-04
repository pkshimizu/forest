import React from 'react'
import {lifecycle} from 'recompose'
import Card from './card'

import './card_view.css'

const CardView = lifecycle({
  componentDidMount() {
    this.props.onLoadFiles();
  }
})(({files}) => {
  return (
    <div className={"row"}>
      {files.map(file => {
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
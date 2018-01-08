import React from 'react'
import {pure} from 'recompose'
import Card from './card'

import './card_view.css'

const CardView = pure(({files}) => {
  return (
    <div>
      {files.map(file => {
        return (
          <Card file={file}/>
        )
      })}
    </div>
  )
});

export default CardView
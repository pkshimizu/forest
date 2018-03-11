import React from 'react'
import {pure} from 'recompose'

import './site_header.css'
import {Navbar} from "react-materialize";

const SiteHeader = pure(() => {
  return (
    <header className={"site-header"}>
      <Navbar fixed={true}>
        <div className={"header-search-wrapper"}>
          <i className={"material-icons"}>search</i>
          <input
            type="text"
            className={"header-search-input"}
            placeholder="Input keyword for search files." />
        </div>
      </Navbar>
    </header>
  )
});

export default SiteHeader

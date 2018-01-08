import React from 'react'
import {pure} from 'recompose'

import './site_header.css'

const SiteHeader = pure(() => {
  return (
    <header className={"site-header"}>
      <div className={"navbar-fixed"}>
        <nav>
          <div className={"nav-wrapper"}>
            <div className={"header-search-wrapper"}>
              <i className={"material-icons"}>search</i>
              <input
                type="text"
                className={"header-search-input"}
                placeholder="Input keyword for search files." />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
});

export default SiteHeader

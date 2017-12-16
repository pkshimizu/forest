import React, {Component} from 'react'

import './site_header.css'

export default class SiteHeader extends Component {
  render() {
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
  }
}

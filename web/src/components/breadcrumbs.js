import React from 'react'
import {pure} from 'recompose'
import Link from "react-router/es/Link";

import "./breadcrumbs.css"

const Breadcrumbs = pure(({parents}) => {
  return (
    <div className={"row"}>
      <nav className={"breadcrumbs"}>
        <div className={"nav-wrapper"}>
          <div className={"col s12"}>
            {parents.map(parent => {
              return (
                <Link to={`/files/${parent.uuid}`} className={"breadcrumb"}>
                  {parent.name}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
});

export default Breadcrumbs
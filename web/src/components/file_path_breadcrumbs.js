import React from 'react'
import {pure} from 'recompose'
import Link from "react-router/es/Link";
import {Breadcrumb, MenuItem} from "react-materialize"

import "./file_path_breadcrumbs.css"

const FilePathBreadcrumbs = pure(({parents}) => {
  return (
    <div className={"file-path-breadcrumbs"}>
      <Breadcrumb>
        {parents.map(parent => {
          return (
            <MenuItem>
              <Link to={`/files/${parent.uuid}`} className={"breadcrumb"}>
                {parent.name}
              </Link>
            </MenuItem>
          )
        })}
      </Breadcrumb>
    </div>
  )
});

export default FilePathBreadcrumbs
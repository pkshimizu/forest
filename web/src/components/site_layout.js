import React from 'react'
import {pure} from 'recompose'
import SiteHeader from "./site_header";
import FolderView from "../containers/folder_view"

const SiteLayout = pure(() => {
  return (
    <div>
      <div>
        <SiteHeader/>
      </div>
      <FolderView/>
    </div>
  )
});

export default SiteLayout

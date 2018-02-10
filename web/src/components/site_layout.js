import React from 'react'
import {pure} from 'recompose'
import SiteHeader from "./site_header";

const SiteLayout = pure((children) => {
  return (
    <div>
      <div>
        <SiteHeader/>
      </div>
      <div className={"container"}>
        {children.children}
      </div>
    </div>
  )
});

export default SiteLayout

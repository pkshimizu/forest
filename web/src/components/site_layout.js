import React from 'react'
import {pure} from 'recompose'
import SiteHeader from "./site_header";
import CardView from "./folder_view/card_view";

const SiteLayout = pure(() => {
  return (
    <div>
      <div>
        <SiteHeader/>
      </div>
      <div className={"row"}>
        <div className={"col s12"}>
          <CardView files={[]}/>
        </div>
      </div>
    </div>
  )
});

export default SiteLayout

import React from "react"

import Concert from './Concert'

const FeaturedConcerts = () => {
  return (
    <div className="featured-concerts">
      <div className="container">
        <div className="row">
          <div className="col">
            <Concert />
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedConcerts

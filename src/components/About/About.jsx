import React from "react"
import WhyConcertParty from "./WhyConcertParty"

import './about.scss'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col">
              <WhyConcertParty />
          </div>
          <div className="col-4">
            <h4>Find Us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              quam, quo amet reiciendis optio ullam exercitationem a explicabo
              vel, pariatur eius velit, nobis voluptatum inventore deserunt
              soluta quidem quia mollitia! Alias dolorem quidem similique
              delectus necessitatibus sequi! Saepe fugit aliquam totam impedit
              maiores veritatis veniam! Assumenda voluptates nisi cum hic.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

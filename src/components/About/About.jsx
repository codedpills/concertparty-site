import React from "react"

import WhyConcertParty from "./WhyConcertParty"
import ContactInfo from "./ContactInfo"

import "./about.scss"

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <WhyConcertParty />
          </div>
          <div className="col-4">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

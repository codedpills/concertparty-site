import React from "react"

import './concerts.scss'

const Concert = ({
  concertDetails = {
    name: "Passenger Accoustic",
    description: "Passenger performs All The Little Lights album",
    month: "Nov",
    day: "20",
    image: "",
  },
}) => {
  return (
    <div className="concert">
      <div className="card">
        <img src={concertDetails.image} alt="featured concert" />
        <div className="card-body">
          <div className="row">
            <div className="col">
              <span>{concertDetails.month}</span>
              <h1>{concertDetails.day}</h1>
            </div>
            <div className="col-9">
              <h5 className="card-title">{concertDetails.name}</h5>
              <p className="card-text">{concertDetails.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Concert

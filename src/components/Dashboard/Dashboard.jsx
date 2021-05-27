import React, { useState, useEffect } from "react"
import axios from "axios"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

import "./dashboard.scss"

import Concerts from "./Concerts"

const Dashboard = () => {
  const [concerts, setConcerts] = useState([])
  const [requesting, setRequesting] = useState(true)

  useEffect(() => {
    axios({
      method: "get",
      url:
        "https://api.predicthq.com/v1/events/?category=concerts&country=us&limit=10",
      headers: {
        Authorization: `Bearer ${process.env.GATSBY_EVENTS_API}`,
      },
    })
      .then(res => {
        setConcerts(res.data.results)
        setRequesting(false)
      })
      .catch(err => {
        console.log(err)
        setRequesting(false)
      })
  }, [])
  console.log("state: ", concerts)

  let allConcerts
  if (requesting === false && concerts.length > 1) {
    allConcerts = concerts.map(concert => {
      const venue =
        concert.entities.length !== 0 ? concert.entities[0].name : "Venue N/A"
      const concertInfo = {
        title: concert.title,
        startDate: concert.start,
        endDate: concert.end,
        tags: concert.labels,
        venue: venue,
      }
      return <Concerts concertInfo={concertInfo} key={concert.id} />
    })
  } else if (requesting === false && concerts.length === 0) {
    allConcerts = <p>Nothing to see here</p>
  } else {
    allConcerts = <h5 className="text-center">Loading...</h5>
  }

  return (
    <div className="dashboard shadow mb-5 bg-white rounded p-3">
      <div className="container">
        <div className="row mb-4">
          <h5>My Concerts Board</h5>
        </div>
        <Tabs defaultActiveKey="upcoming">
          <Tab eventKey="upcoming" title="Upcoming">
            <div className="upcoming">{allConcerts}</div>
          </Tab>
          <Tab eventKey="booked" title="Booked">
            <div className="booked">You have no booked concerts yet.</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Dashboard

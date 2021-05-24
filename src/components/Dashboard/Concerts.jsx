import React from "react"

const Concerts = ({
  concertInfo = {
    title: "Title",
    venue: "Venue",
    startDate: "12th July",
    endDate: "25th July",
    tags: ["concert", "music"],
  },
}) => {
  return (
    <div className="concert-card card shadow-sm p-3 mb-2 bg-white rounded">
      <h5>{concertInfo.title}</h5>
      <ul>
        <li>{concertInfo.venue}</li>
        <li>
          {concertInfo.startDate} to {concertInfo.endDate}
        </li>
      </ul>
      <hr />
      <div className="row">
        <div className="col">
          {concertInfo.tags.map((tag, index) => (
            <span className="badge badge-pill badge-light" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div className="col text-right">
          <button className="btn btn-sm btn-outline-danger">Book now</button>
        </div>
      </div>
    </div>
  )
}

export default Concerts

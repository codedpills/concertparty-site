import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

const ConcertDetails = ({ data }) => {
  const concertDetails = data.contentfulFeaturedconcerts
  return (
    <Layout>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div>
              <img
                src={concertDetails.image.file.url}
                alt={concertDetails.name}
                className="img-fluid"
              />
              <hr />
              <p>
                Date: {concertDetails.month} {concertDetails.day}
              </p>
              <h3>{concertDetails.name}</h3>
              <p>{concertDetails.description.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ConcertDetails

// An alternative way to query data
export const conertDetails = graphql`
  query($slug: String) {
    contentfulFeaturedconcerts(slug: { eq: $slug }) {
      name
      day
      month
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
`

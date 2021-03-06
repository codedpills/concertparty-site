import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"

import Concert from "./Concert"

const FeaturedConcerts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFeaturedconcerts(sort: { fields: createdAt }) {
        nodes {
          name
          day
          month
          slug
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
    }
  `)

  const concerts = data.allContentfulFeaturedconcerts.nodes

  const featuredConcerts = concerts.map(concert => {
    const details = {
      name: concert.name,
      description: concert.description.description,
      month: concert.month,
      day: concert.day,
      slug: concert.slug,
      image: concert.image.file.url,
    }

    return (
      <div className="col-md-4" key={concert.slug}>
        <Link to={`/concerts/${concert.slug}`} className="concert-link">
          <Concert concertDetails={details} />
        </Link>
      </div>
    )
  })

  return (
    <div className="featured-concerts">
      <div className="container">
        <h4>Featured Concerts</h4>
        <br />
        <div className="row">{featuredConcerts}</div>
      </div>
    </div>
  )
}

export default FeaturedConcerts

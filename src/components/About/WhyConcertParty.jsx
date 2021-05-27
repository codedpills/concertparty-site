import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import img from "../../images/hero/anthony-delanoix-hzgs56Ze49s-unsplash.jpg"

const WhyConcertParty = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {title: {eq: "Why Concert Party Rocks"}}) {
        frontmatter {
          title
        }
        html
      }
    }
  `)

  console.log(data)

  return (
    <div className="why-concert-party">
      <h4>{data.markdownRemark.frontmatter.title}</h4>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
      <img src={img} alt="about concert party" className="img-fluid" />
    </div>
  )
}

export default WhyConcertParty

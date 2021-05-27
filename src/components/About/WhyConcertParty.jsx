import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </div>
  )
}

export default WhyConcertParty

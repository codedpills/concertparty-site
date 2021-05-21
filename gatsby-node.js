const path = require("path")

exports.createPages = async ({ grapghql, actions }) => {
  const concertDetailsTemplate = path.resolve(
    `./src/templates/ConcertDetails.jsx`
  )

  // query slugs from Contentful
  const result = await grapghql(`
    query {
      allContentfulFeaturedconcerts {
          nodes {
              slug
          } 
      }
  }`)

  // create pages for each concert
  const slugs = result.data.allContentfulFeaturedConcerts.nodes
  slugs.map(({ slug }) => {
    node.url = `/concerts/${slug}`

    actions.createPage({
      path: node.url,
      component: concertDetailsTemplate,
      context: { slug: node.slug },
    })
  })
}

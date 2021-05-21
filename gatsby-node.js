const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const concertDetailsTemplate = path.resolve(
    `./src/templates/ConcertDetails.jsx`
  )

  // query slugs from Contentful
  const result = await graphql(`
    query {
        allContentfulFeaturedconcerts {
            nodes {
                slug
            }
        }
    }
  `)

  // create pages for each concert
  const nodes = result.data.allContentfulFeaturedconcerts.nodes;
  nodes.map((node) => {
      node.url = `/concerts/${node.slug}`

      actions.createPage({
          path: node.url,
          component: concertDetailsTemplate,
          context: { slug: node.slug}
      })
  })
}

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import LoginForm from "./LoginForm"

import "./login.scss"

const LoginWrapper = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(
        relativePath: {
          eq: "hero/jordon-conner-tIr-PWgSYB4-unsplash.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const bgImg = data.desktop.childImageSharp.fluid

  return (
    <div className="login-wrapper">
      <div className="row no-gutters">
        <div className="col-5">
          <div className="background-section">
            <BackgroundImage
              fluid={bgImg}
              background={`#040e18`}
              style={{ height: "100vh" }}
            >
              <div className="bg-text">
                <h1>When you want to live, you go to concerts!</h1>
                <br />
                <p>Photo by Jordon Conner on Unsplash</p>
              </div>
            </BackgroundImage>
          </div>
        </div>
        <div className="col">
          <div className="login-form-section">
            <div className="logo-area">
              <span className="logo-concert">Concert</span>
              <span className="logo-party">Party</span>
            </div>
            <div className="form-area">
              <h4 className="text-center mb-4">Hello, old friend. Sign in</h4>
              <br />
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginWrapper

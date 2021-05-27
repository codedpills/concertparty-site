import React from "react"

import Layout from "../components/Layout"
import Dashboard from "../components/Dashboard/Dashboard"
import Profile from "../components/Profile/Profile"

const dashboard = () => {
  return (
    <Layout auth={true}>
      <div className="container mt-4 mb-4">
        <h5>MY CONCERT CENTER</h5>
        <br />
        <div className="row">
          <div className="col-3">
            <Profile />
          </div>
          <div className="col">
            <Dashboard />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default dashboard

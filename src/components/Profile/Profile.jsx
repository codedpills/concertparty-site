import React from "react"

import "./profile.scss";

import profileImg from "../../images/people/zak.png"

const Profile = () => {
  return (
    <div className="profile shadow mb-5 bg-white rounded p-3">
      <div className="img-section">
        <img src={profileImg} alt="profile" className="img-fluid" />
      </div>
      <div className="text-section">
        <h5>Ahmed Zaky</h5>
        <h6>ConcertParty member</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          maiores.
        </p>
      </div>
    </div>
  )
}

export default Profile

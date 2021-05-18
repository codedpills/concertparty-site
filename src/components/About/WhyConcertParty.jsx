import React from "react"

import img from "../../images/hero/anthony-delanoix-hzgs56Ze49s-unsplash.jpg"

const WhyConcertParty = () => {
  return (
    <div className="why-concert-party">
      <h4>Why Concert Party</h4>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          eligendi molestiae dolores quas voluptates quo totam sit adipisci
          laborum eum, maxime iste, quibusdam eveniet illo non ad asperiores
          nam! Perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          eligendi molestiae dolores quas voluptates quo totam sit adipisci
          laborum eum, maxime iste, quibusdam eveniet illo non ad asperiores
          nam! Perspiciatis!
        </p>
      </div>
      <img src={img} alt="about concert party" className="img-fluid" />
    </div>
  )
}

export default WhyConcertParty

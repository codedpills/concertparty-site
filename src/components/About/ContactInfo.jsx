import React from "react"

const ContactInfo = () => {
  return (
    <div class="contact-info">
      <h4>Find Us</h4>
      <div className="location">
        <h5>Location</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7734819098005!2d-0.17955748523388076!3d5.600446095939848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b24d499ad2d%3A0x8354c5d0aa1d3b04!2sOne%20Airport%20Square!5e0!3m2!1sen!2sgh!4v1621469134756!5m2!1sen!2sgh"
          width=""
          height=""
          style={{ border: "0", marginTop: "0.5rem" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <ul>
          <li>One Airport Square</li>
          <li>Accra, Ghana</li>
        </ul>
      </div>
      <div className="phone">
        <h5>Phone</h5>
        <ul>
          <li>+233 409 3443 3414</li>
          <li>+233 409 3443 3412</li>
        </ul>
      </div>
      <div className="socials">
        <h5>Socials</h5>
        <ul>
          <li>
            <a href="">
              <i className="bi-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactInfo

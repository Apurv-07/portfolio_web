import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <>

      <section id="contact" class="contact">

        <div className="row">

          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>

            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Patna ,Bhopal,Asansol</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>writetomani11@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 7550899881</p>
                <p>+91 9304945343</p>
              </div>

            </div>
          </div>
      </section>






    </>
  )
}

export default Contact

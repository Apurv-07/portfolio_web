import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    
    <footer id="footer">
    <div className="footer"> 
        <div className="">      
            <div className="footer-info">
              <h3>WebBerry<span>.</span></h3>
              <p>
                Patna ,Bhopal <br/>
                  Asansol<br/><br/>
                <strong>Phone:</strong>+91 7550899881<br/>
                <strong>Phone:</strong>+91 9304945343<br/>
                <strong>Email:</strong>writetomani11@gmail.com<br/>
              </p>
              <div className="social">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          <div className="link">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Seo</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Mobile Application</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Digital Marketing</a></li>   
            </ul>
          </div>
          <div>
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p> 
            </div>
    </div>
    <div className="copyright">
        &copy; Copyright <strong><span>WebBerry</span></strong>. All Rights Reserved
      </div>
   </div>
  </footer>
    </>
  )
}

export default Footer

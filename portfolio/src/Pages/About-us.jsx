import React from 'react'
import "./about.css";
const About = ({src,tital,Body,li,}) => {
  return (
    
    <>

<section id="about" className="about">
    
        <div className="row"   >
          {/* <div className="card">
            <img src="https://i.pinimg.com/originals/f4/55/70/f455706d7915e204a653e19bffcfcbbf.jpg" className="img-fluid" alt=""/>
          </div> */}
          <div className="write">
            <h3>WebBerry provided the all Digital Solution.</h3>
            <p className="fst-italic">
             "We are a dynamic team of problem-solvers and tech enthusiasts, driven by a passion for creating digital solutions that empower 
             businesses and individuals. With expertise in web development, app design, and IT consulting, we're dedicated to turning your 
             ideas into reality. Discover the future of technology with WebBerry IT Solutions."
            </p>
            <ul>
              <li>Our team of tech enthusiasts brings creativity, expertise, and passion to every project.
                 We're not just coding and designing; we're shaping the future of technology. </li>

              <li>We're not just another IT company. We're your partners in technology,
                 committed to turning your visions into digital reality.
                 we've been at the forefront of innovation, helping businesses thrive in the digital age.</li>

              <li>Join us on this exciting journey. Let's create, innovate, and succeed together.
                 Your digital transformation starts here at WebBerry IT Solutions."</li>
            </ul>
            <p>
              Let's Start Your Journey 🚀

              Your success story begins here. Contact us today, and let's embark on an exciting adventure of innovation, growth, and transformation.
               WebBerry IT Solutions - Shaping Your Digital Future."
            </p>
          </div>
        </div>
    </section>




    <section id="features" class="features">
    
        <div className="row">
         
          <div className="write2" data-aos="fade-left" data-aos-delay="100">
            <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-receipt"></i>
              <h4>Our Team 🙌
              </h4>
              <p>Meet the brilliant minds behind WebBerry IT Solutions. Our team is a blend of creativity and technical prowess,
                 with a shared commitment to exceeding expectations. We're not just a company; we're a family dedicated to your success.</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-cube-alt"></i>
              <h4>Our Mission 🚀
              </h4>
              
              <p>At WebBerry IT Solutions, our mission is clear: to provide the digital tools and strategies that drive progress.
                 We work tirelessly to deliver results that matter,
                 turning your goals into reality through technology</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-images"></i>
              <h4>Our Story 📜
              </h4>
              <p>Founded with a vision of transforming the digital landscape, WebBerry IT Solutions has been at the forefront of innovation  Over the years,
                 we've taken on exciting challenges, collaborated with diverse clients, and honed our skills to deliver cutting-edge solutions.</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-shield"></i>
              <h4>Let's Connect 🤝
              </h4>
              <p>Get in touch with us to explore how WebBerry IT Solutions can empower your digital journey.
                 We're excited to be part of your success story. Contact us today!</p>
            </div>
          </div>

          {/* <div className="card2">
           <img src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/12/08/567720/220777/isometric_work_roomoffice_3d_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2315047_o.png"/>

           </div> */}

        </div> 
    </section>







   
    </>

  )
  }

export default About
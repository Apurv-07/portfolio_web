import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./Hero.css";

function Hero({array}) {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  // const array = [
  //   "https://wallpapercave.com/wp/mXXyO8i.jpg",
  //   // "https://tse1.mm.bing.net/th?id=OIP.cUsprnN0L3YZGICrk37VAQHaEK&pid=Api&P=0&h=220",
  //   "https://www.potential.com/wp-content/uploads/2018/02/Teamwork-Team-Together-Everyone-Acheives-More.png",
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1200px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
  //   "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
  // ];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % array.length);
    }, 10000);
  
    return () => clearInterval(intervalId);
  }, [array.join(',')]);

  useEffect(() => {
    setAnimate(true); // Enable animation after changing the image
  }, [current]);

  return (
    <>
      <div
        className={`slider-bg ${animate ? "animate" : ""}`}
        style={{
          background: `url(${array[current]})`
        }}
      >
        <div className="hero-text">
        <h1 className="heading">We manage your IT, so you can manage your business.</h1>
        <p className="text">Take charge of your business continuity with innovative IT solutions</p>
        
        <div className="btns-hero-container">
          <button style={{maxWidth: "150px"}}onClick={()=>{}}>Book a free consultation</button>
          <button style={{width: "100px"}} onClick={()=>{}}>Services</button>
        </div>
        </div>
        <button
          className="gt"
          onClick={() => setCurrent((prev) => (prev - 1 + array.length) % array.length)}
        >
          &lt;
        </button>
        <button
          className="lt"
          onClick={() => setCurrent((prev) => (prev + 1) % array.length)}
        >
          &gt;
        </button>
      </div>
      <div className="dots-container">
        {array.map((item, index) => (
          <div
            key={index}
            className="dots"
            style={{
              background: `${index === current ? "red" : "grey"}`,
            }}
          ></div>
        ))}
      </div>
      <hr />
      {/* <Card title={"Web Development"} svg={SampleSvg} />
      <Card title={"SEO"} svg={SampleSvg}/>
      <Card title={"Mobile application"} svg={SampleSvg}/> */}
    </>
  );
}

Hero.propTypes = {
  array: PropTypes.array,
};

export default Hero;

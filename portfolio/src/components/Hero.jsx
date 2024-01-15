import React, { useEffect, useState } from "react";
import "./Hero.css";
import Card from "./Card";
import SampleSvg from '../assets/icons/sample.svg';

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Hero() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  const array = [
    "https://wallpapercave.com/wp/mXXyO8i.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.cUsprnN0L3YZGICrk37VAQHaEK&pid=Api&P=0&h=220",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1200px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
  ];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % array.length);
    }, 4000);
  
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
        <h1>Hello</h1>
        <p>New text here</p>
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
      <Card title={"Web Development"} svg={SampleSvg} />
      <Card title={"SEO"} svg={SampleSvg}/>
      <Card title={"Mobile application"} svg={SampleSvg}/>
    </>
  );
}

export default Hero;

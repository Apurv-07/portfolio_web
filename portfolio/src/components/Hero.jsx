import React, { useEffect, useState } from "react";
import "./Hero.css";

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
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
  const array = [
    "https://wallpapercave.com/wp/mXXyO8i.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.cUsprnN0L3YZGICrk37VAQHaEK&pid=Api&P=0&h=220",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1200px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
  ];

  useInterval(
    () => {
      setCurrent((prev) => (prev + 1) % array.length);
    },
    4000
  );

  return (
    <>
      <div
        style={{
          background: `url(${array[current]})`,
          width: "100%",
          height: "400px",
          color: "white",
        }}
      >
        <h1>Hello</h1>
        <p>New text here</p>
        <button
          className="gt"
          onClick={() => setCurrent((prev) => (prev - 1 + array.length) % array.length)}
        >
          &gt;
        </button>
        <button
          className="lt"
          onClick={() => setCurrent((prev) => (prev + 1) % array.length)}
        >
          &lt;
        </button>
      </div>
      <div
        style={{ display: "flex", marginTop: "60px", justifyContent: "center", gap: "20px" }}
      >
        {array.map((item, index) => (
          <div
            key={index}
            style={{
              height: "20px",
              width: "20px",
              background: `${index === current ? "red" : "grey"}`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Hero;

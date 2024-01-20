// import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
  const images = [
    "https://wallpapercave.com/wp/mXXyO8i.jpg",
    // "https://tse1.mm.bing.net/th?id=OIP.cUsprnN0L3YZGICrk37VAQHaEK&pid=Api&P=0&h=220",
    "https://www.potential.com/wp-content/uploads/2018/02/Teamwork-Team-Together-Everyone-Acheives-More.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1200px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
  ];
  return (
    <div>
      <Hero array={images} />
    </div>
  )
}

export default Home
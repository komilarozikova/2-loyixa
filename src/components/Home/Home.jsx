import React from 'react';
import '../Home/Home.css';
import homeimg from '../../img/homeimg.jpg';
import sky from '../../img/sky.jpg';

const Home = () => {
  return (
   <div className="mainpage">
     <div className='home'>
      <div className="home-top">
        <div className="image">
            <img src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_476,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg" alt="" />
        </div>
      <div className="top-text">
      <h1>Kayla Griffith</h1>
      <p>Award Winning Author</p>
      </div>
      </div>
    </div>
    <div className="banner">
        <div className="banner-box">
            <div className="banner-box-container">
                <div className="left">
                 <div className="left-text">
                 <h1>The Swan Isle </h1>
                     <h1>2035</h1>
                     <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                     <h3>
                     Order Now
                     </h3>
                 </div>
                     <div className="buttons">
                        <button>Amazon</button>
                        <button>Google</button>
                        <button>ibooks</button>
                     </div>
                </div>
                <div className="right">
                        <img src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_770,h_1086,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png" alt="" />
                </div>
            </div>
        </div>
    </div>

   </div>
  )
}

export default Home

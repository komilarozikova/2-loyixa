import React from 'react';
import '../Appearance/Appearace.css'

const Appearance = () => {
  return (
    <div className='appearance'>
      <div className="appearace-container">
        <div className="title">
        <h1>See Upcoming Appearances</h1>
        <p className='app'>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
        </div>
        <div className="box">
            <h2>
January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</h2>
<button className='boxbutton'>Join</button>
        </div>
        <div className="box">
            <h2>
January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</h2>
<button className='boxbutton'>Join</button>
        </div>
        <div className="box">
            <h2>
January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</h2>
<button className='boxbutton'>Join</button>
        </div>
      </div>
      <div className="box2">
        <img className='roundimg' src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_354,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg" alt="" />
        <h1>About Kayla Griffith</h1>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <button className='boxbutton' id='readme'>Read More</button>
      </div>
    </div>
  )
}

export default Appearance

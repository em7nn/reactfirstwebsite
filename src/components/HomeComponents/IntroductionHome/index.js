import React from 'react'

import "./index.scss"
function IntroductionHome() {
  return (
    <section className='fir'>
      <div className='first_sec'>
       <div className='left'>
        <h2>A Bootstrap 5 template for modern businesses</h2>
        <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit!</p>
        <div className='buttonlar'>
         <button id='btn1'>Get Started</button>
         <button id='btn2'>Learn More</button>
        </div>
       </div> 
       <div className='right'>
        <img src='https://dummyimage.com/600x400/343a40/6c757d' alt='imege'/>
       </div>
      </div>
    </section>
  )
}

export default IntroductionHome
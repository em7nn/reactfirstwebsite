import React from 'react'
import "./index.scss"
function OurTeam() {
  return (
    <section className='nine'>
      <div className='nine_sec'>
        <div className='has'>
          <h3>Our Team</h3>
        </div>
        <div className='dedicate'>
          <p>Dedicated to quality and your success</p>
        </div>
        <div className='teammates'>
          <div className='name'>
            <img src='https://dummyimage.com/150x150/ced4da/6c757d' alt='imerg' />
            <h3>Ibbie Eckart</h3>
            <p>Founder & CEO</p>
          </div>
          <div className='name'>
            <img src='https://dummyimage.com/150x150/ced4da/6c757d' alt='imerg' />
            <h3>Arden Vasek</h3>
            <p>CFO</p>
          </div>
          <div className='name'>
            <img src='https://dummyimage.com/150x150/ced4da/6c757d' alt='imerg' />
            <h3>Toribio Nerthus</h3>
            <p>Operations Manager</p>
          </div>
          <div className='name'>
            <img src='https://dummyimage.com/150x150/ced4da/6c757d' alt='imerg' />
            <h3>Malvina Cilla</h3>
            <p>CTO</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
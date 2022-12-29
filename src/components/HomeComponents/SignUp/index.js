import React from 'react'
import "./index.scss"
function SignUp() {
  return (
    <section className='four'>
      <div className='four_sec'>
        <div className='main_products'>
          <h2>New products, delivered to you.</h2>
          <p>Sign up for our newsletter for the latest updates.</p>
        </div>
        <div className='input'>
          <div className='inpbutton'>
            <input type={"text"} placeholder="  Email address..." />
            <button>Sign Up</button>
          </div>
          <div className='inputunyazisi'>
              <p>We care about privacy, and will never share your data.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
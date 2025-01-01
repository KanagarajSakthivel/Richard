import React from 'react'
import Navbar from './navbar'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
    <div className='home-container'>
      <div className='left'>
        <h1>Momentum</h1>
        <p>Launch your product — and savor the momentum.</p>
        <button>Get The App</button>
      </div>
      <div className='right-div'>
        <img src={require('../assests/home.png')} alt="Home" className='right' />
        </div>
      <div>
      </div>
      
    </div>
    <div className='about'>
        <div className='about-text'>
          <h5>Aenean Consectetur Porta</h5>
          <h2>Nullam quis risus eget urna mollis ornare vel eu leo.</h2>
        </div>
        <div className='about-image'>
            
          <img src={require('../assests/about.png')} alt="About" className='about-img' />
        </div>
      </div>
  <div className="feature">
  <div className="feature-content">
    <div>
    <div>Aenean Consectetur</div>
    <h2>Cay sociis nato que penatibus et</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
    <img src={require("../assests/feature1.png")} alt="Feature 1" className="feature-image" />
  </div>
  
  <div className="feature-content-two">
    <img src={require("../assests/feature2.png")} alt="Feature 2" className="feature-image2" />
    <div className="feature-text">
      <div>ConsectUltricies</div>
      <h2>Amet Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
  </div>
  <div className='feature-content-three'>
    <div>
    <div>Aenean Consectetur Porta</div>
    <h2>Magna Porta Sit Bibendum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
    <img src={require("../assests/feature3.png")} alt="" className='feature-image3'/>
  </div>
  <div className='feature-icon'>
    <div className='feature-content-icons'>
      <img src={require("../assests/icon1.svg")} width="80" alt="" />
      <h4> Activity Notifications</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
    <div className='feature-content-icons'>
      <img src={require("../assests/icon1.svg")} width="80" alt="" />
      <h4> Custom Timing</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
    <div className='feature-content-icons'>
      <img src={require("../assests/icon1.svg")} width="80" alt="" />
      <h4>Mobile Optimized</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
  </div>
  <div className="feature-numbers-container">
  <div className="feature-numbers">
    <div className="number">+12K</div>
    <h4 class="black-text">Aenean Condimentum</h4>
  </div>
  <div className="feature-numbers">
    <div className="number">84</div>
    <h4 class="black-text">Aenean Condimentum</h4>
  </div>
  <div className="feature-numbers">
    <div className="number">3,07</div>
    <h4 class="black-text">Quam Inceptos</h4>
  </div>
  <div className="feature-numbers">
    <div className="number">24H</div>
    <h4 class="black-text">Ullamcorper</h4>
  </div>
</div>

</div>
<div className='how-to-use'>
  <div className='how-one'>
    <div>Aenen Conssthuhs Portsa</div>
    <h2>Sem Risus Elit Vestibulum</h2>
    <p>Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.  purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
  <img src={require("../assests/how1.jpeg")} alt="" />
  </div>
  <div className='how-two'>
    <img src={require("../assests/how 2.jpeg")} alt="" />
    <div>Aenean Consectetur Porta</div>
    <h2>Parturient Tortor</h2>
    <p>Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>
  </div>
  <div className='slide'>
    <div className='quote-wrap'>
      <h3>HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.ing</h3>
      <div>
        <p>Joshua Home</p>
      </div>
        <p>
          <strong>New York Times</strong>
          </p>
    </div>
    <div>
      <h3>HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.ing</h3>
      <div>
        <p>Nukka elite libreo, a pfhdjnu Augure</p>
      </div>
      <p>
        <strong>New York times</strong>
      </p>
    </div>
  </div>
  <div className='brand'>
    <img src={require("../assests/brand.png")} alt="" />
  </div>
  <div className='phone'>
    <img src={require("../assests/p.jpg")} alt="" />
  </div>
</div>
<div className='download'>
  <h3>Ready to get started?</h3>
  <div>
  <button className='down'>Download</button>
  <button className='get'>Get in Touch</button>
  </div>
</div>
<div className='section-wide'>
  <div>
  <h2>Get Updataes frm RAJ</h2>
  <p>New Course aletrs, Discounts and free lessons</p>
  </div>
  <div className='form'>
    <form>
      <input type="text"  placeholder='ENter email'/>
    </form>
    <button>Subscribe</button>
  </div>
  

</div>

</div>
    
  )
}

export default Home

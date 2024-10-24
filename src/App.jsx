import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

import personal_photo from './assets/business_photo.png'

function App() {
  return (
    <>
      <div className='card'>
        <img src={personal_photo}/>
        <div>
          <h1>Laura Smith</h1>
          <h3>Frontend Developer</h3>
          <h4>laurasmith.website</h4>
          
          <div>
            <button>Email</button>
            <button>LinkedIn</button>
          </div>

          <h2>About</h2>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily taks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

          <h2>Interests</h2>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>
    </>
  )
}

export default App

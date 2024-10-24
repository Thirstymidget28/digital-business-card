import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import personal_photo from './assets/business_photo.png'


function App() {
  return (
    <>
      <div className='card'>
        <div className='profile-picture'><img src={personal_photo}/></div>
        <div className='card-content'>
          <Header/>
          <div className='content-section'>
            <h2>About</h2>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily taks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>

          <div className='content-section'>
            <h2>Interests</h2>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App

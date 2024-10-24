import './Footer.css'
import { handleClick } from '../utilities/linkHandler.js'

import twitter_icon from '../assets/twitter_icon.svg'
import facebook_icon from '../assets/facebook_icon.svg'
import instagram_icon from '../assets/instagram_icon.svg'
import github_icon from '../assets/github_icon.svg'

export default function Footer() {
    return (
        <footer>
          <button onClick={() => handleClick("https://www.twitter.com")}><img src={twitter_icon} alt="Twitter logo"/></button>
          <button onClick={() => handleClick("https://www.facebook.com")}><img src={facebook_icon} alt="Facebook logo"/></button>
          <button onClick={() => handleClick("https://www.instagram.com")}><img src={instagram_icon} alt="Instagram logo"/></button>
          <button onClick={() => handleClick("https://www.github.com")}><img src={github_icon} alt="GitHub logo"/></button>
        </footer>
    )
}
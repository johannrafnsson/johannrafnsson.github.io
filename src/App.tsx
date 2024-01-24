import nopLogo from './assets/nop-logo-transparent.png'
import nopIcon from './assets/favicon_nop_white/favicon-32x32.png'
import './App.css'
import { SocialIcon } from 'react-social-icons'

function App() {
  return (
    <>
      <h1>
        <img src={nopLogo} className="logo" alt="NÖP" />
      </h1>
      <p className="members">
        <img className="iconSeparator" src={nopIcon} alt='' />
        <span>ARNAR GUITAR</span>
        <img className="iconSeparator" src={nopIcon} alt='' />
        <span>ÁLFUR VOCALS</span>
        <img className="iconSeparator" src={nopIcon} alt='' />
        <span>JÓHANN DRUMS</span>
        <img className="iconSeparator" src={nopIcon} alt='' />
        <span>HARRÝ BASS</span>
        <img className="iconSeparator" src={nopIcon} alt='' />
      </p>
      <div className="card">
        <p className="spotContainer">
          <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/track/4vICglWYruXlpiurAxN7hF?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </p>
      </div>
      <p className="social">
        <SocialIcon network="facebook" target="_blank" bgColor="#fe4352" url="https://www.facebook.com/profile.php?id=100063684015723" />
        &nbsp;
        <SocialIcon network="instagram" target="_blank" bgColor="#fe4352" url="https://www.instagram.com/nop.band" />
      </p>
    </>
  )
}

export default App

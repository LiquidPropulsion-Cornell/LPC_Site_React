import './TopBar.css'
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate();

  return (
    <div className='bar'>
      <div className='logo'>
        <img src='LPC.png' />
        <h2>Liquid Propulsion @ Cornell</h2>
      </div>
      <div className='pages'>
        <div className='page'>
          <button onClick={() => navigate('/home')}>Home</button>
        </div>
        <div className='page'>
          <button onClick={() => navigate('/members')}>Members</button>
        </div>
        <div className='page'>
          <button onClick={() => navigate('/subteams')}>Subteams</button>
        </div>
        <div className='page'>
          <button onClick={() => navigate('/faq')}>FAQ</button>
        </div>
        <div className='page'>
          <button onClick={() => navigate('/apply')}>Apply</button>
        </div>
      </div>

      <div className='socials'>
        <a className='social' href='https://www.linkedin.com/company/lpcornell/'><img src='linkedin-icon.webp' /></a>
        <a className='social' href='https://www.instagram.com/lpc_rocketry/'> <img src='instagram.png' /></a>
      </div>



    </div>
  )

}

export default TopBar;
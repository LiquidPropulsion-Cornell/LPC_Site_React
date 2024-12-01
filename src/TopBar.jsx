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
          <button onClick={() => navigate('/apply')}>Apply</button>
        </div>
      </div>

      <div className='socials'>
        <a className='social' href='https://www.linkedin.com/company/lpcornell/'><img src='linkedin-icon.webp' /></a>
        <a className='social' href='https://www.instagram.com/lpc_rocketry/'> <img src='instagram.png' /></a>
        <a className='social' href="mailto:cornell.liquidpropulsion@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
        </svg></a>
      </div>



    </div>
  )

}

export default TopBar;
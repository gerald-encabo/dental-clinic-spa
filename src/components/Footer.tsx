import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '@/styles/footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-wrapper container'>
        <div className='footer-social-media'>
          <ul>
            <li>
              <Link to='https://www.facebook.com/DrScarpinoDental/' aria-label='Facebook' target='_blank'>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to='https://goo.gl/maps/Qs1YDJbimMw8WgRv8' aria-label='Google Map' target='_blank'>
                <FaGoogle />
              </Link>
            </li>
            <li>
              <Link to='https://www.linkedin.com/company/dental-corp/' aria-label='LinkedIn' target='_blank'>
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link to='https://www.instagram.com/dentalcorp.ca' aria-label='Instagram' target='_blank'>
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-copyright'>
          <span>Copyright © 2024. All Rights Reserved Dr. Carmine Scarpino Dental.</span>
        </div>
        <div className='footer-link'>
          <ul>
            <li>
              <Link to='https://www.scarpinodental.com/site/privacy-policy' aria-label='Privacy Policy' target='_blank'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to='https://www.scarpinodental.com/site/website-accessibility' aria-label='Accessibility' target='_blank'>
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
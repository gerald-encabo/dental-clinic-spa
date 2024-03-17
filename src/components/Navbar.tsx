import '@/styles/navbar.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "@/assets/images/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaSearch, FaCalendar } from "react-icons/fa";
import SearchBar from './SearchBar';

const Navbar = () => {

  const [popSearchBar, setPopSearchBar] = useState<boolean>(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const scrollContact = () => {
    const scrollToId = document.getElementById('contact');
    const location = scrollToId?.offsetTop!;
    console.log(location)
    window.scrollTo({
       left: 0,
       top: location + 80,
       behavior: "smooth",
    })
  }

  return (
    <nav className='navbar'>
      <section className='navbar-section'>
        <div className='navbar-section-address'>
            <NavLink                   
              onClick={scrollContact}
              to=""
            >
              <div className='location'>
                <span><FaLocationDot /></span>
                402-428 Portage Avenue, <br/>Winnipeg, MB R3C 0E2 🇨🇦
              </div>
            </NavLink>
        </div>
        <div className='navbar-section-logo'>
          <NavLink
            to=""
            onClick={scrollUp}
          >
            <LazyLoadImage
            src={logo}
              alt="Dr. Carmine Scarpino Dental Logo"
              effect='blur'
              loading='lazy'
              width="100%"
              height="100%"
            />
          </NavLink>
        </div>
        <div className='navbar-section-contact'>
            <div className='navbar-section-address-tablet'>
              <NavLink 
                onClick={scrollContact}
                to={''}
              >
                <span><FaLocationDot /></span>402-428 Portage Avenue, <br/>Winnipeg, MB R3C 0E2 🇨🇦
              </NavLink>
            </div>
            <div className='navbar-section-contact-info'>
                <NavLink 
                  to={''}
                  onClick={() => setPopSearchBar(!popSearchBar)} 
                  className='contact-search'
                >
                  <FaSearch />
                </NavLink>
                <NavLink 
                  to="tel:204-942-7577"
                  className='contact-phone' 
                >
                  <MdLocalPhone />&nbsp;(204) 942-7577
                </NavLink>
                <NavLink 
                  className='contact-appointment' 
                  onClick={scrollContact}
                  to={''}
                >
                  <FaCalendar />&nbsp;Appointment
                </NavLink>
            </div>
        </div>
      </section>
      {
        popSearchBar ? (
          <SearchBar
            popSearchBar={popSearchBar}
            setPopSearchBar={setPopSearchBar}
          />
        ) : null
      }
    </nav>
  )
}

export default Navbar
import '@/styles/banner.scss';
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Banner = ({scrollContact}: any) => {

  return (
    <section className='banner'>
      <div className='banner-wrapper container'>
        <p className='preheading'>New patients welcome</p>
        <h2>Dental Treatments for the Whole Family</h2>
        <p className='leading'>Call us today to book an appointment or request an appointment online.</p>
        <NavLink 
          onClick={scrollContact}
          to={''}
        >
          Get Started <IoMdArrowDropright />
        </NavLink>
      </div>
  </section>
  )
}

export default Banner
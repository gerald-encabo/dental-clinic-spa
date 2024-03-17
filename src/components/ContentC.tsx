import "@/styles/content-c.scss";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const ContentC = ({scrollContact}: any) => {
  return (
    <section className='content-c'>
      <div className='content-c-wrapper container'>
        <h2>New Patients Welcome!</h2>
        <p>Are you looking for a dentist in Downtown Winnipeg? Our office is accepting new patients. Contact us today to book your first appointment.</p>
        <NavLink 
          onClick={scrollContact}
          to={''}
        >
          Contact Us <IoMdArrowDropright />
        </NavLink>
      </div>
    </section>
  )
}

export default ContentC
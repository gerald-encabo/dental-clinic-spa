import '@/styles/content-b.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";
import contentB from "@/assets/images/content-2.jpeg";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const ContentB = ({scrollContact}: any) => {

  return (
    <section className='content-b'>
      <div className='content-b-wrapper'>
        <div className='content-b-left-content'>
          <LazyLoadImage
            src={contentB}
            alt="Dr. Carmine Scarpino Dental, Winnipeg"
            effect='blur'
            loading='lazy'
          />
        </div>
        <div className='content-b-right-content'>
          <div className='content-b-right-content-wrapper container'>
              <p className='preheading'>Meeting your oral health needs</p>
              <h2>What Our Clinic Offers</h2>
              <ul>
                <li>Emergencies</li>
                <li>Crowns and Bridges</li>
                <li>Restorative Services</li>
                <li>Root Canal Therapy</li>
                <li>Senior Oral Health Care</li>
                <li>Children's Services</li>
                <li>Periodontal Therapy</li>
                <li>Partial and Full Dentures</li>
                <li>Keltech Dental lab</li>
                <li>Hygiene Cleanings</li>
              </ul>
              <NavLink 
                onClick={scrollContact}
                to={''}
              >
                Book Now <IoMdArrowDropright />
              </NavLink>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContentB
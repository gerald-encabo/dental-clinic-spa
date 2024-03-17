import '@/styles/content-a.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";
import contentA from "@/assets/images/content-1.jpeg";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const ContentA = ({scrollContact}: any) => {

  return (
    <section className='content-a'>
      <div className='content-a-wrapper'>
        <div className='content-a-left-content'>
          <div className='content-a-left-content-wrapper container'>
            <p className='preheading'>Providing Dental Services Since 1981</p>
            <h2>We believe oral health care is an integral part of one's overall health.</h2>
            <p>It is our mission to provide our patients with the dental care they need to help promote a healthy smile that lasts a lifetime.</p>
            <p>At our Winnipeg dental office, we treat, diagnose, and manage oral health care needs through services such as gum care, root canals, fillings, crowns, bridges, and preventive maintenance.</p>
            <p>From children to senior patients, your oral health is our priority. Contact us today to join our practice.&nbsp;</p>
            <NavLink           
              onClick={scrollContact}
              to={''}
            >
              Get Started <IoMdArrowDropright />
            </NavLink>
          </div>
        </div>
        <div className='content-a-right-content'>
          <LazyLoadImage
            src={contentA}
            alt="Dr. Carmine Scarpino Dental Winnipeg"
            effect='blur'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}

export default ContentA
import '@/styles/mobile-contact.scss';
import { NavLink } from 'react-router-dom';
import { GoMail } from "react-icons/go";
import { MdLocalPhone } from "react-icons/md";
import { useEffect, useState, useRef  } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { ImArrowUp } from "react-icons/im";

const MobileContact = ({scrollContact}: any) => {

    const [contactFooterBtn, setContactFooterBtn] = useState<boolean>(false);
    const navbarRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
      window.addEventListener("scroll", () => {
        
        if(window.scrollY > 100) {
          setContactFooterBtn(true);
        } else {
          setContactFooterBtn(false)
        }
      })
    }, [contactFooterBtn])

    const scrollUp = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        })
    }

    return (
        <section className="mobile-contact" ref={navbarRef}>
            {
                contactFooterBtn && (
                    <>
                        <div className='mobile-contact-btn'>
                            <NavLink                   
                                to="tel:204-942-7577"
                                id="mobile-contact-phone"
                                >
                                <MdLocalPhone />
                            </NavLink>
                            <NavLink 
                                to={''} 
                                onClick={scrollContact}
                                id="mobile-contact-mail"
                                >
                                <GoMail />
                            </NavLink>
                            <NavLink
                                to={''}
                                onClick={scrollUp}
                                id="mobile-scroll-btn"
                            >
                                <ImArrowUp />
                            </NavLink>
                        </div>
                        <NavLink 
                            className='mobile-contact-address'
                            to={'https://www.google.com/maps/dir//Dr.+Carmine+Scarpino+Dental+402-428+Portage+Ave+Winnipeg,+MB+R3C+0E2/@49.8927427,-97.1595433,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x52ea73e2b6773d91:0x709b2a5a650d8a7e!2m2!1d-97.149072!2d49.891305?entry=ttu'}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >        
                            <span><FaLocationDot /></span> 402-428 Portage Avenue, Winnipeg, MB R3C 0E2 🇨🇦
                        </NavLink>
                    </>
                )
            }
        </section>
    )
}

export default MobileContact
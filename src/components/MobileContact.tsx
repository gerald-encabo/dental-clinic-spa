import '@/styles/mobile-contact.scss';
import { NavLink } from 'react-router-dom';
import { GoMail } from "react-icons/go";
import { MdLocalPhone } from "react-icons/md";
import { useEffect, useState, useRef  } from 'react';

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

    return (
        <section className="mobile-contact" ref={navbarRef}>
            {
                contactFooterBtn && (
                    <>
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
                    </>
                )
            }
        </section>
    )
}

export default MobileContact
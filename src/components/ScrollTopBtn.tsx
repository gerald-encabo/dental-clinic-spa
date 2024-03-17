import '@/styles/scroll-top-btn.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ImArrowUp } from "react-icons/im";

const ScrollToTopBtn = () => {

  const [scrollToTopBtn, setScrollToTopButton] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setScrollToTopButton(true)
      } else {
        setScrollToTopButton(false)
      }
    })
  }, [scrollToTopBtn])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <section className='scroll-to-top-btn' onClick={scrollUp}>
          {
            scrollToTopBtn && (
              <Link
                to={''}
                onClick={scrollUp}
              >
                <ImArrowUp />
              </Link>
            )
          }
    </section>
  )
}

export default ScrollToTopBtn
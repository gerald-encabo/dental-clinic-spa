import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import ContentA from '@/components/ContentA'
import ContentB from '@/components/ContentB'
import ContextC from '@/components/ContentC'
import MobileContact from '@/components/MobileContact'
import ScrollToTopBtn from '@/components/ScrollTopBtn'

const Main = () => {

  const scrollContact = () => {
    const scrollToId = document.getElementById('contact');
    const location = scrollToId?.offsetTop!;

    window.scrollTo({
       left: 0,
       top: location - 80,
       behavior: "smooth",
    })
  }

  return (
    <>
        <Banner scrollContact={scrollContact} />
        <ContentA scrollContact={scrollContact} />
        <ContentB scrollContact={scrollContact} />
        <ContextC scrollContact={scrollContact} />
        <Contact />
        <ScrollToTopBtn />
        <MobileContact scrollContact={scrollContact}  />
    </>
  )
}

export default Main
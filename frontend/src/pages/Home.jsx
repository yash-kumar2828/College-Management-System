import React from 'react';
import Header from '../components/ExtraComponent/Header'
import About from '../components/ExtraComponent/About'
import Contact from '../components/ExtraComponent/Contact';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Home=()=>{
    const location = useLocation();

  useEffect(() => {

    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }

    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
    return(
        <>  
            <Header />
            <section id='about'>
                 <About />
            </section>

            <section id='contact'>
                <Contact />
            </section>
        </>
    )
}

export default Home;
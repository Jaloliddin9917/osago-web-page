import React from 'react';
import Footer from '../../components/footer/footer';
import Section1 from '../../components/section-1/section-1';
import Section2 from '../../components/section-2/section-2';
import Section3 from '../../components/section-3/section-3';
import Section4 from '../../components/section-4/section-4';
import Section5 from '../../components/section-5/section-5';
import Section6 from '../../components/section-6/section-6';
import Section7 from '../../components/section-7/section-7';
import Section8 from '../../components/section-8/section-8';

const Home = () => {
  return (
    <div>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Footer/>
    </div>
  )
}

export default Home;
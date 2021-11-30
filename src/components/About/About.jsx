import React from 'react';
import './About.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import aboutVector from '../../assets/about_vector.png';
import aboutAnime from '../../assets/home.gif';

const About=()=>{
    return (
    <div className='section-container'>
      <Header heading='About Me' details='Priyanka Asrani | Full Stack Developer | Machine Learning Enthusiast'/>
      
      <div className='about-main'>
        <div className='about-main-left'>
          {/* Sub section 1 */}
          <p>Hi there!
            Thanks For taking out the time to look here!
            I am Priyanka Asrani,
            A Computer Science Undergraduate, Full Stack Developer and a Machine Learning Enthusiast.
            Currently, I am exploring deep learning and object detection.
            I'm looking to collaborate on anything that you want me to.
            Building products that make an impact in people's lives is my passion.
          </p>
        </div>

        <div className='about-main-right'>
          <img src={aboutAnime} alt='animation' className='about-anime'/>
        </div>
      </div>
      <Footer
        phrase='Check out my '
        link='skills!'
        toAdress='/skills'
      />
      {/* Vector Frame! */}
      <div className='vector-frame'>
        <img src={aboutVector} className='about-vector' alt='about' />
      </div>
    </div>);
}
  
export default About;
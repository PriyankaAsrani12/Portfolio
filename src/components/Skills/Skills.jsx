import React from 'react';
import './Skills.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import skillsVector from '../../assets/skills_vector.png'
import { skillList } from './../../assets/skillsData';
import SkillCard from './SkillCard';


const Skills=()=>{
    return (
        <div className='section-container'>
            <Header
                    heading='My Skills'
                    details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
                />

            <div className='skill-card-container'>
                {skillList.map(({ skillName, skillUrl }) => (
                    <SkillCard skillName={skillName} skillUrl={skillUrl} />
                ))}
            </div>

            <Footer phrase='Check out my ' link='projects!' toAdress='/projects' />

            <div className='skills-vector-frame'>
                <img src={skillsVector} alt='skills' className='skills-vector'/>
            </div>

        </div>
    
        );
}
  
export default Skills;
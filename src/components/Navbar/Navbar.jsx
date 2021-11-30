import React from 'react';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link,withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    render () {
        const {location}=this.props;
        console.log(this.props)
        const homeClass=location.pathname==='/'?'active-item':'';
        const aboutClass=location.pathname==='/about'?'active-item':'';
        const skillsClass=location.pathname==='/skills'?'active-item':'';
        const projectsClass=location.pathname==='/projects'?'active-item':'';
        const contactClass=location.pathname==='/contact'?'active-item':'';


        return (
        <Menu>
            {/* We need client side routing therefore we are using Link instead of a tag */}
            <Link to='/' className={`menu-item ${homeClass}`}>Home</Link>
            <Link to='/about' className={`menu-item ${aboutClass}`}>About</Link>
            <Link to='/skills' className={`menu-item ${skillsClass}`}>Skills</Link>
            <Link to='/projects' className={`menu-item ${projectsClass}`}>Projects</Link>
            <Link to='/contact' className={`menu-item ${contactClass}`}>Contact</Link>

            {/* <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="skills" className="menu-item" href="/skills">Skills</a>
            <a id="projects" className="menu-item" href="/projects">Projects</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a> */}
        </Menu>
        );
    }
}

export default withRouter(Navbar);
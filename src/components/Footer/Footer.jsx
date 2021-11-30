import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import GoHome from '../GoHome/GoHome'

const Footer = ({ phrase, link, toAdress }) => {
    return (
        <div className='footer-link'>
            {phrase}
            <Link to={toAdress} className='footer-link-element'>
                {link}
            </Link>
            <GoHome />
        </div>
    );
};

export default Footer;
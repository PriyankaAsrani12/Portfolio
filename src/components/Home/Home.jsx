import React from 'react';
import './Home.css';
import GoHome from '../GoHome/GoHome';
import {Link} from 'react-router-dom';
import homeAnime from '../../assets/home5.gif'
import Modal from '../Modal/Modal'

class Home extends React.Component{
    state={showModal:false};

    componentDidMount() {
        setTimeout(()=>{
            this.setState({showModal:true});
        },2400);
    }
    
    closeModal=()=>{
        this.setState({showModal:false});
    }

    render(){
        return (
        <div className='home-container'>
            <div className='header-text'>
                <h1>Welcome to my portfolio!</h1>
                <p>This is Priyanka, a full stack dev and a ML enthusiast</p>
            </div>
            <div className='head-btns'>
                <Link to='/about' className='btn btn-white'>
                    <p className='btn-text'>Know more about me</p>
                </Link>
                <Link to='/contact' className='btn btn-transparent'>
                    <p className='btn-text'>Connect with me</p>
                </Link>
            </div>
            <div className='splash-image'>
                <img
                    src={homeAnime}
                    alt='animation'
                    className='home-anime'
                />
            </div>
            <GoHome />
        </div>
        );
    }
}
  
export default Home;
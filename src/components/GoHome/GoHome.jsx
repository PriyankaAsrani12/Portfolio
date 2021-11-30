import React from 'react';
import './GoHome.css';
import { withRouter } from 'react-router-dom';
import HomeIconWhite from '../../assets/home_white.png'
import HomeIconBlack from '../../assets/home_black.png'

class GoHome extends React.Component {
    navigateToHome=()=>{
        const {history}=this.props;
        history.push('/');
    }
    render () {
        const {location}=this.props;
        const whiteBtn=location.pathname==='/';
        return(
            <button onClick={this.navigateToHome} className={`go-home-btn ${whiteBtn?'white-bkg':'gradient-bkg'}`}>
                <img src={whiteBtn?HomeIconBlack:HomeIconWhite} className='home-icon' alt='home-icon' />
            </button>
        );
    
    }
}


export default withRouter(GoHome);
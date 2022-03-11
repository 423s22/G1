import React from 'react';
import './aboutUsStyle.css'
import profilePic from '../images/profilePic.jpeg'

function AboutUs(){
    return(
        <div>
            <h1>THE TEAM</h1>
            <div>
                <div style={{display:'flex'}}>
                     <div className={'profile-style'}>
                        <img src={profilePic} alt='placeholder for profile pic' style={{height: '80%'}}/>
                        <p>profile description goes here</p>
                    </div>
                    <div className={'profile-style'}>
                        <img src={profilePic} alt='placeholder for profile pic' style={{height: '80%'}}/>
                        <p>profile description goes here</p>
                    </div>
                    <div className={'profile-style'}>
                        <img src={profilePic} alt='placeholder for profile pic' style={{height: '80%'}}/>
                        <p>profile description goes here</p>
                    </div>
                </div>
            </div>
             <div>
                <div style={{display:'flex'}}>
                    <div className={'profile-style'}>
                        <img src={profilePic} alt='placeholder for profile pic' style={{height: '80%'}}/>
                        <p>profile description goes here</p>
                    </div>
                    <div className={'profile-style'}>
                        <img src={profilePic} alt='placeholder for profile pic' style={{height: '80%'}}/>
                        <p>profile description goes here</p>
                    </div>
                    <div className={'profile-style'}>
                        <img src={profilePic} alt='placeholder for profile pic' style={{height: '80%'}}/>
                        <p>profile description goes here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
import React from 'react';
import './personPageStyle.css'
import profilePic from '../images/profilePic.jpeg'
import medIcon from '../images/medIcon.png'

function PersonPage(){
    return(
        <div className='overall-size'>
            <div className='person-page-pic'>
                <img src={profilePic} alt='profile picture for person page' style={{height:'500px'}}/>
            </div>
            <div className='person-page-words'>
                <h1>Person's Name</h1>
                <p> This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!</p>
            </div>
            <div className='person-page-contact'>
                <div>
                    <h3>  <img src={medIcon} alt='Med Kit Icon'/>  EmailGoesHere@gmail.com</h3>
                    <h3>  <img src={medIcon} alt='Med Kit Icon'/>  WebPagelink.com</h3>
                    <h3>  <img src={medIcon} alt='Med Kit Icon'/>  (123)Tele-Phone</h3>
                </div>
            </div>
        </div>
    )
}

export default PersonPage;
import React from 'react';
import './personPageStyle.css'
import profilePic from '../images/profilePic.jpeg'
import Footer from '../Components/footer';
import medIcon from '../images/medIcon.png'
import email from '../images/email.png'
import telephone from '../images/telephone.png'

function PersonPage(){
    return(
        <div className='overall-size'>
            <div className='person-page-pic'>
                <img src={profilePic} alt='profile for person page' style={{height:'500px', maxWidth: '100%'}}/>
            </div>
            <div className='person-page-words'>
                <h1 className='name'>Person's Name</h1>
                <p style={{fontFamily: 'Roboto', fontSize: '24px'}}> This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                This is the discription for the person's profile. The backgroud information goes here!
                </p>
            </div>
            <div className='line'>
            </div>
            <div className='person-page-contact'>
                <div>
                    <h3>  <img src={email} alt='Email Icon'/>  EmailGoesHere@gmail.com</h3>
                    <h3>  <img src={medIcon} alt='Med Kit Icon'/>  WebPagelink.com</h3>
                    <h3>  <img src={telephone} alt='Telephone Icon'/>  (123)Tele-Phone</h3>
                </div>
            </div> 
        </div>
    )
}

export default PersonPage;
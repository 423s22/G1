import React, {useState} from 'react';
import './headerStyle.css'
import medIcon from '../images/medIcon.png'
import searchIcon from '../images/searchIcon.png'




function Header(props){


const [count, setCount] = useState(0)                       //just to test out hooks 
function downOne() 
{
    setCount(prevCount => prevCount -1)
}
function upOne() 
{
    setCount(prevCount => prevCount +1)
}


    return(
        <div className="header">
            <div className='mainIcon'>

            <img src={medIcon} alt='Med Kit Icon' style={{textAlign:'center'}}/> 
            <p>{props.name}</p>                             {/* just to test props */}


            </div>
            <div className='clickables'>
                <ul className='nav'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>The Team</li>
                    <li>Insurance</li>
                    <li>Your Location</li>
                </ul>
                <p>{props.anotherName}</p>                  {/* testing out props*/}

            </div>
            <div className='searchBar'>
               <div className='searchArea'>
               <img src={searchIcon} alt='Search Bar Icon'/>

               <button onClick={downOne}>Subtract</button>        {/*Testiong out use state hooks*/}
               <span>{count}</span>
               <button onClick={upOne}>Add</button>

               </div>
                
            </div>
          

        </div>
    )


};

export default Header;
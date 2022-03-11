import React from 'react';
import './productPageSpecificStyle.css'


function ProductPageSpecific(){
    return(
        <div>
            <div className='specificProduct'>
                <div>
                    <h1>X-RAY</h1>
                    <p>Code: xxx-xxx-x</p>
                </div>
            </div>
            <div>
                <div className='inlineDetails'>
                    <h4 className='lJust'>Location</h4>
                    <h4 className='midJust'>Price</h4>
                    <h4 className='rJust'>Insurance</h4>
                </div>
                <hr style={{width:'90%'}}></hr>
                <div className='inlineDetails'>
                    <p className='lJust'>Bozeman Health Deaconess Hospital</p>
                    <p className='midJust'>$260</p>
                    <h4 p
                    className='rJust'>Yes</h4>
                </div>
                <hr style={{width:'90%'}}></hr>
                <div className='inlineDetails'>
                    <p className='lJust'>Big Sky Medical Center</p>
                    <p className='midJust'>$340</p>
                    <h4 p
                    className='rJust'>Yes</h4>
                </div>
                <hr style={{width:'90%'}}></hr>
                <div className='inlineDetails'>
                    <p className='lJust'>Livingston HealthCare</p>
                    <p className='midJust'>$320</p>
                    <h4 p
                    className='rJust'>No</h4>
                </div>
                <hr style={{width:'90%'}}></hr>
                <div className='inlineDetails'>
                    <p className='lJust'>Madison Valley Medical Center</p>
                    <p className='midJust'>$370</p>
                    <h4 p
                    className='rJust'>No</h4>
                </div>
                <hr style={{width:'90%'}}></hr>
                <div className='inlineDetails'>
                    <p className='lJust'>Ruby Valley Medical Center</p>
                    <p className='midJust'>$400</p>
                    <h4 p
                    className='rJust'>No</h4>
                </div>
                <hr style={{width:'90%'}}></hr>
                <div className='inlineDetails'>
                    <p className='lJust'>Broadwater Health Center</p>
                    <p className='midJust'>#390</p>
                    <h4 p
                    className='rJust'>Yes</h4>
                </div>
                <hr style={{width:'90%'}}></hr>
            </div>
        </div>
    )
}

export default ProductPageSpecific;
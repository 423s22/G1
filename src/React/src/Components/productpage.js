import React from 'react';
import './productPageStyle.css'
import ProductPageSpecific from '../Components/productpagespecific';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


function ProductPage(){
    return(
        <div>
            <div className='productCat'>
                <h1 className='name' style={{fontSize: '80px', textAlign: 'center'}}>RADIOLOGY</h1>
            </div>
            <div className='filters'>
                <h3>Filters</h3>
            </div>
            <div className='productRow'>
                <div className='productItem'>
                    <h1><Link to="/ProductPageSpecific">X-Ray</Link></h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam sed lectus pretium, fermentum magna accumsan, lobortis
                     elit. Vestibulum commodo augue a orci scelerisque rhoncus.
                      Vivamus accumsan diam quis lectus varius mattis. Vestibulum 
                      in venenatis sapien. In vestibulum nibh vitae ornare 
                      scelerisque. Etiam aliquam odio quis bibendum semper. Morbi
                       faucibus, odio eu aliquet pulvinar, nibh justo lobortis 
                       ligula, non congue mauris lacus non magna. Donec commodo
                        arcu in nibh sollicitudin, a pulvinar lorem dignissim. 
                        Aenean in sapien in lorem lacinia vestibulum.
                    </p>
                </div>
                <div className='productItem'>
                    <h1><Link to="/ProductPageSpecific">X-Ultrasound</Link></h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam sed lectus pretium, fermentum magna accumsan, lobortis
                     elit. Vestibulum commodo augue a orci scelerisque rhoncus.
                      Vivamus accumsan diam quis lectus varius mattis. Vestibulum 
                      in venenatis sapien. In vestibulum nibh vitae ornare 
                      scelerisque. Etiam aliquam odio quis bibendum semper. Morbi
                       faucibus, odio eu aliquet pulvinar, nibh justo lobortis 
                       ligula, non congue mauris lacus non magna. Donec commodo
                        arcu in nibh sollicitudin, a pulvinar lorem dignissim. 
                        Aenean in sapien in lorem lacinia vestibulum.
                    </p>
                </div>
                <div className='productItem'>
                    <h1><Link to="/ProductPageSpecific">MRI</Link></h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam sed lectus pretium, fermentum magna accumsan, lobortis
                     elit. Vestibulum commodo augue a orci scelerisque rhoncus.
                      Vivamus accumsan diam quis lectus varius mattis. Vestibulum 
                      in venenatis sapien. In vestibulum nibh vitae ornare 
                      scelerisque. Etiam aliquam odio quis bibendum semper. Morbi
                       faucibus, odio eu aliquet pulvinar, nibh justo lobortis 
                       ligula, non congue mauris lacus non magna. Donec commodo
                        arcu in nibh sollicitudin, a pulvinar lorem dignissim. 
                        Aenean in sapien in lorem lacinia vestibulum.
                    </p>
                </div>
            </div>
            <div className='productRow'>
                <div className='productItem'>
                    <h1><Link to="/ProductPageSpecific">Mammogram</Link></h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam sed lectus pretium, fermentum magna accumsan, lobortis
                     elit. Vestibulum commodo augue a orci scelerisque rhoncus.
                      Vivamus accumsan diam quis lectus varius mattis. Vestibulum 
                      in venenatis sapien. In vestibulum nibh vitae ornare 
                      scelerisque. Etiam aliquam odio quis bibendum semper. Morbi
                       faucibus, odio eu aliquet pulvinar, nibh justo lobortis 
                       ligula, non congue mauris lacus non magna. Donec commodo
                        arcu in nibh sollicitudin, a pulvinar lorem dignissim. 
                        Aenean in sapien in lorem lacinia vestibulum.
                    </p>
                </div>
                <div className='productItem'>
                    <h1><Link to="/ProductPageSpecific">PETScan</Link></h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam sed lectus pretium, fermentum magna accumsan, lobortis
                     elit. Vestibulum commodo augue a orci scelerisque rhoncus.
                      Vivamus accumsan diam quis lectus varius mattis. Vestibulum 
                      in venenatis sapien. In vestibulum nibh vitae ornare 
                      scelerisque. Etiam aliquam odio quis bibendum semper. Morbi
                       faucibus, odio eu aliquet pulvinar, nibh justo lobortis 
                       ligula, non congue mauris lacus non magna. Donec commodo
                        arcu in nibh sollicitudin, a pulvinar lorem dignissim. 
                        Aenean in sapien in lorem lacinia vestibulum.
                    </p>
                </div>
                <div className='productItem'>
                    <h1><Link to="/ProductPageSpecific">CTScan</Link></h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam sed lectus pretium, fermentum magna accumsan, lobortis
                     elit. Vestibulum commodo augue a orci scelerisque rhoncus.
                      Vivamus accumsan diam quis lectus varius mattis. Vestibulum 
                      in venenatis sapien. In vestibulum nibh vitae ornare 
                      scelerisque. Etiam aliquam odio quis bibendum semper. Morbi
                       faucibus, odio eu aliquet pulvinar, nibh justo lobortis 
                       ligula, non congue mauris lacus non magna. Donec commodo
                        arcu in nibh sollicitudin, a pulvinar lorem dignissim. 
                        Aenean in sapien in lorem lacinia vestibulum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;
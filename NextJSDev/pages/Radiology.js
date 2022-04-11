import React from 'react';
import styles from "../styles/Radiology.module.css";
import Link from "next/link";



function Radiology(){
    return(
        <div className={styles.overallBackgroundColor}
        style={{fontFamily: "BebasNeue",}}>
        <div className='productCat'>
            <h1 style={{fontSize: '80px', textAlign: 'center'}}>RADIOLOGY</h1>
        </div>
        <div className={styles.filters}>
            <h3>Filters</h3>
        </div>
        <div className={styles.productRow}>
            <div className={styles.productItem}>
                <Link href="/ProductPageSpecific"><a className={styles.name}>X-ray</a></Link>
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
            <div className={styles.productItem}>
                <Link href="/ProductPageSpecific"><h1 className={styles.name}>Ultrasound</h1></Link>
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
            <div className={styles.productItem}>
                <Link href="/ProductPageSpecific"><h1 className={styles.name}>MRI</h1></Link>
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
        <div className={styles.productRow}>
            <div className={styles.productItem}>
                <Link href="/ProductPageSpecific"><h1 className={styles.name}>Mammogram</h1></Link>
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
            <div className={styles.productItem}>
                <Link href="/ProductPageSpecific"><h1 className={styles.name}>PETScan</h1></Link>
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
            <div className={styles.productItem}>
                <Link href="/ProductPageSpecific"><h1 className={styles.name}>CTscan</h1></Link>
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

export default Radiology;
import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import cellphone_smartwatch from "../assets/cellphone-smartwatch.svg";
import NotificationsSvg from './util/NotificationsSvg';
//@ts-ignore
import background from "../assets/person-1.webp";
import AlertSvg from './util/AlertSvg';



const  Section_3 :React.FC = () => {



  return (
    <Section_3Element >
                    {/* <div className="model"></div> */}
                    <div className="parallax">
                        <div className="container-1">
                            <div>
                                <NotificationsSvg/>
                                <span>NOTIFICATION SYSTEM</span>
                            </div>
                            <p>Helpful Reminders To Keep You on Track</p>
                        </div>  
                        <div className="container-2">
                            <div>
                                <AlertSvg/>
                                <span>ALERT SYSTEM</span>
                                </div>
                                <p>Let Your Body Be Your Guide</p>
                        </div>    
                    </div>
                    
    </Section_3Element >
);
};

export default Section_3;


const Section_3Element = styled.div`
       
        color:#fff;
        letter-spacing: var(--spacing);
        position: relative;
      
        .model{
            /* position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            background:rgba(0,0,0,0.4);
            z-index:1; */
        }
       
        .parallax{
            background-image: url(${background} );
            background-size: cover;
            background-attachment:fixed;
            height: 80vh;
            display:grid;
    
        
        
        }


        .container-1{
           padding: 4rem;
        }
        .container-1 div{
            display: flex;
            align-items: center;
         
        }

        .container-1 p{
            font-size: 2.5rem;
        }

        .container-2{
            padding: 4rem;
        }

        .container-2 div{
            display: flex;
            align-items: center;
        }

        .container-2 p{
            font-size: 2.5rem;
        }

        span{ 
            font-size:1.5rem;
            font-weight: bold;
        }
`
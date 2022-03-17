import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//@ts-ignore
import payment from "../assets/icons/payment.png";

const Section_6: React.FC = () => {


      return (
            <Section_6Element >
                  <div className="newsletter-container">
                        <h2>Subscribe and Get 15% Off Your First Purchase</h2>
                        <label htmlFor="Email" >Email*</label>
                        <div className="input-container">
                              <input type="text" placeholder='Sing up here' />
                              <button className="btn-cta input-btn">Subscribe</button>
                        </div>
                  </div>
                   <div className="links-container">
                          <li>Instagram</li>
                          <li>Facebook</li>
                          <li>Twitter</li>
                          <li>Tiktok</li>
                          <li>Youtube</li>
                          <li>Term&Conditions</li>
                          <li>Shipping&Returns</li>
                          <li>Privacy Policy</li>
                   </div>
                   <div className="footer-container">
                         <p > TrackMate X  &copy;{new Date().getFullYear()} All rights reserved</p>
                         <img src={payment} alt="" />
                   </div>
            </Section_6Element >
      );
};

export default Section_6;


const Section_6Element = styled.div`
       background: rgb(118,77,128);  
      background: linear-gradient(21deg, rgba(118,77,128,1) 13%, rgba(115,80,126,1) 49%, rgba(48,50,50,1) 74%); 

      .newsletter-container{
          text-align: center;
          /* display: flex;
          flex-direction: column;
          align-items: center; */
          padding: 15rem 0;
          color:#fff;
          /* background: red; */
          
      }

      h2{
            font-size:4rem;
      }

      .input-container{
            position: relative;
            /* width: 100%; */
      }
      
      label{
            display: inline-block;
            font-size: 2rem;
            margin: 4rem 74rem 1rem 0;
            
            
      }
      
      input{
           
            width: 85rem;
            /* max-width: 100%; */
            padding: 2rem 5rem 2rem 3rem;
            border-radius: 5rem;
            /* background: #a238ff; */
              box-shadow: #a238ff 0px 0px 10px 2px;
            outline: none;
              
      }
      


      .input-btn{
            position: absolute;
            top: 0rem;
            bottom: 0rem;
            right: 52rem;
            padding: 1.3rem 4rem;
      }

      .input-btn:hover{
            background: #000;
            color: #fff;
      }

      .links-container{
            display: flex;
            justify-content:center;
            width: 80%;
            margin: 0 10%;
            color: #fff;
            /* width: 100%; */
            /* background: red; */
            gap:2rem;
            padding-bottom: 4rem;
            border-bottom: 1px solid #fff;
      }

      .links-container li{
            font-size:2rem;
            list-style: none;
            cursor: pointer;
            padding: 1rem;
            border-radius: 10px;
            
      }
      li:nth-of-type(6){
            margin-left: auto;
      }

      .links-container li:hover{
           /* color:#a238ff ; */
           background: #a238ff;
          box-shadow: #a238ff 0px 0px 20px 2px;
          
      }


      .footer-container{
            display: flex;
            width: 80%;
            margin: 4rem 10% 0 10%;
            justify-content: space-between;
            padding-bottom: 5rem;
      }

      .footer-container p{
            font-size:2rem;
            color: #fff;
      }     

      .footer-container img{
            width:25rem;
      }

`
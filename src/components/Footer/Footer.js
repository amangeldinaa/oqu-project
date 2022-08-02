import React from 'react';
import './Footer.css';
import { useMediaQuery } from "react-responsive";

function Footer() {
    const isDesktop = useMediaQuery({
        query: "(min-width: 992px)"
    });
    
  return (
    <>
    {isDesktop ?  
    <div className='footer'>
        <div className='text'>
            <div>
                {'Made by Aruzhan Amangeldina'}
            </div>
            <div>
                {'nFactorial Incubator 2022'}
            </div>
            <div>
                {'amangeldinaaru@gmail.com'}
            </div>
        </div>
    </div>

    :

    <div className='footer'>
        <div className='text-m'>
            <div>
                {'Made by Aruzhan Amangeldina'}
            </div>
            <div>
                {'nFactorial Incubator 2022'}
            </div>
            <div>
                {'amangeldinaaru@gmail.com'}
            </div>
        </div>
    </div> }
    </>
  )
}

export default Footer
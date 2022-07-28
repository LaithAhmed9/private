import React from "react";
import one from '../assets/cet/01.jpg'
import two from '../assets/cet/02.jpg'
import three from '../assets/cet/03.jpg'
import four from '../assets/cet/04.jpg'
import five from '../assets/cet/05.jpg'
import six from '../assets/cet/06.jpg'
import seven from '../assets/cet/07.jpg'
import eight from '../assets/cet/08.jpg'
import nine from '../assets/cet/09.jpg'
import ten from '../assets/cet/10.jpg'
import elevent from '../assets/cet/11.jpg'
import towelve from '../assets/cet/12.jpg'
import therten from '../assets/cet/13.jpg'
import fourten from '../assets/cet/14.jpg'
import fiveten from '../assets/cet/15.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Cert = () => {
  const portfolio = [
    {
      id: 1,
      src: one,
    },
    {
      id: 2,
      src: two,
    },
    {
      id: 3,
      src: three,
    },
    {
      id: 4,
      src: four,
    },
    {
      id: 5,
      src: five,
    },
    {
      id: 6,
      src: six,
    },
    {
      id: 7,
      src: seven,
    },
    {
      id: 8,
      src: eight,
    },
    {
      id: 9,
      src: nine,
    },
    {
      id: 10,
      src: ten,
    },
    {
      id: 11,
      src: elevent,
    },
    {
      id: 12,
      src: towelve,
    },
    {
      id: 13,
      src: therten,
    },
    {
      id: 14,
      src: fourten,
    },
    {
      id: 15,
      src: fiveten,
    },
   
  ]

  AOS.init({
    delay: 200,
    duration: 1200,
    once: false
  })
  return (
    <div 
      name='Certification' 
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Certification</p>
          <p className='py-6'>Some of the certifications I have obtained</p>
        </div>
      
          <div data-aos="fade-up" className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({id, src}) => (
          
          <div  key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img  src={src} alt='cert' className='rounded-md duration-200 hover:scale-105'/>
          
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cert;

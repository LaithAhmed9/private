import React from 'react'
import fruty from "../assets/portfolio/fruty.png";
import special_design from "../assets/portfolio/special_design.png";
import coffe from "../assets/portfolio/coffe.png";
import laith_design from "../assets/portfolio/laith_design.png";
import laith_web_developer from "../assets/portfolio/laith_web_developer.png";
import bondi from "../assets/portfolio/bondi.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: fruty,
      href: 'https://laithahmed9.github.io/fruit/',
      code: 'https://github.com/LaithAhmed9/fruit',
    },
    {
      id: 2,
      src: special_design,
      href: 'https://laithahmed9.github.io/Special_Design/',
      code: 'https://github.com/LaithAhmed9/Special_Design'
    },
    {
      id: 3,
      src: coffe,
      href: 'https://laithahmed9.github.io/coffee/',
      code: 'https://github.com/LaithAhmed9/coffee'
    },
    {
      id: 4,
      src: laith_design,
      href: 'https://laithahmed9.github.io/alzero_web/',
      code: 'https://github.com/LaithAhmed9/alzero_web'
    },
    {
      id: 5,
      src: laith_web_developer,
      href: 'https://laithahmed9.github.io/web2/',
      code: 'https://github.com/LaithAhmed9/web2'
    },
    {
      id: 6,
      src: bondi,
      href: 'https://laithahmed9.github.io/bondi/',
      code: 'https://github.com/LaithAhmed9/bondi'
    },
   
  ]
  AOS.init({
    delay: 200,
    duration: 1200,
    once: false
  })
  return (
    <div 
      name='portfolio' 
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
      
          <div data-aos="fade-up" className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({id, src, href, code}) => (
          
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt='pic' className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex justify-around py-4'>
            <a href={href} 
               className='hover:bg-slate-700 p-1 rounded duration-300'
               target="-blank" 
               >Demo</a>
            <a href={code}
               className='hover:bg-slate-700 p-1 rounded duration-300'
               target="-blank" 
               >code</a>
            </div>
          </div>
          ))}
        </div>
       

      </div>
    </div>
  )
}

export default Portfolio


import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png"

import AOS from 'aos';
import 'aos/dist/aos.css';


const Experience = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: nextjs,
          title: "Next JS",
          style: "shadow-white",
        },
        {
          id: 6,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 7,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 8,
          src: bootstrap,
          title: "Bootstrap",
          style: "shadow-blue-400",
        },
      ];
      AOS.init({
        delay: 200,
        duration: 1200,
        once: false
      })
  return (
    <div 
        name='experience'
        className='bg-gradient-to-b from-gray-800 to-black w-full h-[800px]'
        >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className=' text-center'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-6'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

           
            <div data-aos="fade-up" className='w-full grid grid-cols-2 gap-4 sm:grid-cols-3 text-center py-8 px-6 sm:gap-8'>
                {techs.map(({id, src, title, style}) => (

                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='pictures' className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Experience
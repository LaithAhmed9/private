import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    AOS.init({
        delay: 200,
        duration: 1200,
        once: false
      })
  return (
    <div 
        name='contact'
        className='w-full h-[800px] bg-gradient-to-b from-black to-gray-800 p-4 text-white'
        >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div data-aos="fade-up" className='grid grid-cols-1 xl:grid-cols-1'>
                
            <div className="contact-info">
                        <h2 className=' mb-4 '>Information About Me :</h2>
                        <div className="contact-address flex items-center mb-4">
                            <span className="icon-map-marked-alt">Address :</span>
                            <p className='ml-4'>Iraq, Erbil</p>
                        </div>

                        <div className="contact-mail mb-4  flex items-center">
                            <span className="icon-envelope">Email :</span>
                            <p className='ml-4'>Eng.laith.ahmad1993@gmail.com</p>
                        </div>

                        <div className="contact-phone mb-4 flex items-center">
                            <span className="icon-phone-alt ">Phone :</span>
                            <p className='ml-4'>(+964)7512124042</p>
                        </div>
                </div>

                <form action='https://getform.io/f/87605e96-8920-4648-a3a0-378f46c49793' method='POST' className='flex flex-col w-full'>
                    <input
                        type='text'
                        name='name'
                        required
                        placeholder='Enter your name'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '
                    />
                    <input
                        type='text'
                        name='email'
                        required
                        placeholder='Enter your email'
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea 
                        name='message'
                        placeholder='Enter your message'
                        rows='10'
                        required
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>

                        <button className='text-white bg-gradient-to-b from-cyan-500
                        to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Let's talk</button>
                </form>

                
               
               
            </div>
        </div>
    </div>
  )
}

export default Contact
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const About = () => {
  return (
    <div id='home' className='w-full h-auto'>
      <div className=' bg-back bg-cover bg-center bg-opacity-100 w-full h-screen mx-auto p-2 flex justify-start items-center'>
        <div className='xs:mt-12 md:mt-40 xs:ml-4 md:ml-40 xs:mb-20'>
          <p className='uppercase text-sm tracking-widest text-gray-200'>
           Таны веб сайтыг өөрийн юм шиг
          </p>
          <h1 className=' text-white'>
            УРЛАНА <span className='text-[#DF7200] font-light'> СИЙЛНЭ</span>
          </h1>
          <h1 className='hidden md:block text-gray-100 text-3xl font-light'>GIILEN.MN WEB DEVLOPMENT COMPANY</h1>
          {/* <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p> */}
          <div className='mt-8 relative bg-[#DF7200] text-white px-2 py-4 overflow-hidden w-40 rounded-lg group'>
              <li className='absolute xs:w-60 md:w-64 h-64 md:mt-20 xs:mt-10 lg:mt-14 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-linear duration-300 bg-[#E636FF]  left-0 top-0'></li>
              <li className='relative'>Дэлгэрэнгүй</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

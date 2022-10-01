import React from 'react';
import Slider from '../Slider/index'

const Footer = () => {
  return (
    <div id='footer' className='bg-footer bg-cover bg-center  px-20'>
     <div className='flex justify-center items-center '>
        <div className='my-40'>
            <p className='text-center text-white text-3xl font-mono font-bold uppercase'>гоё төслийн санаа байна уу ?</p>
            <div className='flex justify-center'>
                <div className='bg-blue-600 text-center  text-white mx-10 py-4 rounded-xl w-40 cursor-pointer'>
                    Шууд холбогдох
                </div>
            </div>
        </div>
     </div>
    </div>
  );
};

export default  Footer;  

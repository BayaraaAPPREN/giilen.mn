import React from 'react';
import Link from 'next/link'


const Main = () => {
  return (
    <div id='about' className='bg-deed bg-cover bg-center xs:h-screen'> 
      <div className='grid xs:grid-cols-1 md:grid-cols-2 items-center'>
        <div className='grid col-span-1'>
          <div className='xs:py-40 xs:mt-20 md:py-40'>
             <img src='/../back6.png'/>
          </div>
        </div>
        <div className='grid col-span-1 mb-10'>
          <div className='mx-8 xs:py-20 md:py-40 '>
            <h1 className='text-xs xs:mx-4 sm:mx-2 md:mx-2 lg:mx-20 font-bold uppercase text-blue-300'>бидний тухай</h1>
            <div className='xs:mx-4 sm:mx-2 md:mx-2 lg:mx-20'>
              <p className='text-3xl mt-4 text-slate-100 font-semibold leading-7'>Найдвартай баталгаатай технологи</p>
              <div className='mt-6'>
                <p
                 className='text-slate-400 text-sm'>Бид бүхэн хэрэглэгчиддээ хамгийн найдвартай үйлчилгээг үзүүлэхийг зорьдог бөгөөд
                түүндээ эзэн болж ажиллахыг зорьж байна.</p>
            
                <div className='flex justify-center mt-4'>
                  <img className='w-14 h-14 mx-2' src='/../icon/1.png'/>
                  <img className='w-14 h-14 mx-2' src='/../icon/2.png'/>
                  <img className='w-14 h-14 mx-2' src='/../icon/3.png'/>
                  <img className='w-14 h-14 mx-2' src='/../icon/4.png'/>
                  <img className='w-14 h-14 mx-2' src='/../icon/5.png'/>  
                  <img className='hidden xl:block w-14 h-14 mx-2' src='/../icon/6.png'/>
                </div>
                <div className='mt-8 relative bg-[#DF7200] text-white px-2 py-4 overflow-hidden w-40 rounded-lg group'>
                    <li className='absolute xs:w-60 md:w-64 h-64 md:mt-20 xs:mt-10 lg:mt-14 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-linear duration-300 bg-[#913BFF]  left-0 top-0'></li>
                    <Link href='/#service'>
                      <li className='relative'>Веб үйлчилгээ</li>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;  

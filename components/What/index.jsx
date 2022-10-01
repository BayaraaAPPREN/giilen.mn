import React, { useState } from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram,AiFillPhone, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import { toast } from 'react-toastify';
import {MdEmail} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'

const What = () => {
    const [email, setEmail] = useState('');

    function HandleSubmit(){
        if(!email){
            toast("Имейл хаягаа оруулаарай !")
        } else{
            toast("Баярлалаа бид холбогдох болно.")
        }
    }
  return (
    <div id='contact' className='bg-what bg-cover bg-center pt-20 pb-8 '>
     <div className='flex flex-wrap justify-between xs:mx-8 md:mx-20'>
        <div className='mx-4 mt-4'>
            <h1 className='text-2xl text-white font-sans font-bold'> Холбогдох</h1>
            <div className='flex items-center'>
                <AiFillPhone color='white' size={20}/>
                <div className='text-slate-300 font-medium mx-2 text-lg'>80666605</div>
            </div>
            <div className='flex items-center'>
                <MdEmail color='white' size={20}/>
                <div className='text-slate-300 font-medium mx-2 text-lg'> giilen@info.mn</div>
            </div>
            <div className='flex items-center'>
                <ImLocation color='white' size={20}/>
                <div className='text-slate-300 font-medium mx-2 text-lg'> Ulaanbaatar, Mongolia</div>
            </div>
        </div>
        <div className='mx-4 mt-4'>
            <h1 className='text-2xl text-white font-mono font-bold'> Хамтарч ажиллах</h1>
            <p className='text-slate-300 font-sans font-bold text-xs w-60'>Таньд галтай цогтой шинэ содон санаа байвал бид бүхэн технологийн тал дээр бүрэн хамтарч ажиллах болно.</p>
        </div>
        <div className='mx-4 mt-4'>
            <h1 className='text-2xl text-white font-mono font-bold'> Мэдээлэл хүлээн авах</h1>
            <p className='text-slate-300 font-sans text-xs w-60'>Та имейл хаягаа бүртгүүлэснээр манайх тогтмол мэдээ мэдээлэл явуулж байх болно.</p>
            <div className='flex'>
                <input onChange={(e) => setEmail(e.target.value)} className='outline-none px-2 focus:ring-2 focus:ring-[#E37601] rounded-sm ' type='email'/>
                <a onClick={HandleSubmit} className='mx-1 bg-[#E37601] text-white px-4 py-2 rounded-sm'>Илгээх</a>
            </div>
        </div>
     </div>
     <div className='border-b mt-20 border-slate-700'></div>
     <div className='flex justify-center items-center'>
        <div className='mt-8 flex'>
            <h1 className='text-lg xs:mx-2 md:mx-4 lg:mx-28 text-white font-light hidden md:block'>All right reserved @2022 Bayarsuren</h1>
            <div className='mx-1'>
            <a href='https://www.facebook.com/profile.php?id=100086228687135'>
                <FaFacebookF className='border border-slate-700 rounded-lg transition ease-linear duration-300 hover:bg-blue-600 cursor-pointer  p-2' color='white' size={40}/>
            </a>
            </div>
            <div className='mx-1'>
                <AiFillInstagram className='border border-slate-700 rounded-lg transition ease-linear duration-300  hover:bg-gradient-to-b hover:from-[#F40576] to-[#F4BC00] cursor-pointer  p-2' color='white' size={40}/>
            </div>
            <div className='mx-1'>
                {/* <a href='https://www.facebook.com/profile.php?id=100086228687135'> */}
                   <AiOutlineTwitter className='border border-slate-700 rounded-lg transition ease-linear duration-300 hover:bg-blue-600 cursor-pointer  p-2' color='white' size={40}/>
                {/* </a> */}
            </div>
            <div className='mx-1'>
                <AiFillYoutube className='border border-slate-700 rounded-lg transition ease-linear duration-300 hover:bg-red-600 cursor-pointer  p-2' color='white' size={40}/>
            </div>
        </div>
     </div>
    </div>
  );
};

export default  What;  

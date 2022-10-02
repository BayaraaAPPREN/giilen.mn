
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram,  AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);


    const handleNav = () => {
        setNav(!nav)
    }
    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 90 ){
                setShadow(true)
            } else{
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    },[])
    return(
        <div className={shadow? 'fixed w-full py-2 shadow-md z-[100] bg-white ' : 'fixed w-full mt-4 h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full 2xl:px-16'>
                <div className='flex items-center mx-8'>
                    <img className='h-16' src='/../logo/logo.png' />
                    <div className=''>
                        <div className={shadow?'text-slate-900 text-2xl mx-2': 'text-white text-2xl mx-2 font-normal'}>GIILEN.MN</div>
                        <div className='text-[10px] text-[#DF7200] mx-2'>TECHNOLOGY START UP</div>
                    </div>
                </div>
                <div className={shadow? 'text-slate-700' : 'text-slate-200'}>
                    <ul className='hidden md:flex md:mr-10 md:items-center'>
                        <Link href='/'>
                            <li className='mx-4 text-sm uppercase hover:border-b'>Нүүр</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='mx-4 text-sm uppercase hover:border-b'>Бидний тухай</li>
                        </Link>
                        <Link href='/#service'>
                            <li className='mx-4 text-sm uppercase hover:border-b'>Вебсайт</li>
                        </Link>
                        <Link href='/#design'>
                            <li className='mx-4 text-sm uppercase hover:border-b'>Постер дизайн</li>
                        </Link>
                        <Link href='/#contact'>
                            <div className='relative bg-[#DF7200] text-white px-5 py-2 overflow-hidden rounded-full group mx-4'>
                                <li className='absolute w-64 h-64 md:mt-20 lg:mt-16 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-linear duration-300 bg-[#913BFF]  left-0 top-0'></li>
                                <li className='relative'>Бидэнтэй холбогдох</li>
                            </div>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer mr-6'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>


            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={ nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-300' 
                                     : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                           <img className='h-20 w-20' src='/../../logo/logo.png'/>
                           <h1 className='text-slate-900 text-2xl'>Giilen.mn</h1>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                               <AiOutlineClose/>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%]'>Технологиор жигүүрлэнэ</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/' >
                                <li onClick={()=>setNav(false)} className='py-4  px-4 text-sm'>Нүүр</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={()=>setNav(false)} className='py-4  px-4  text-sm'>Бидний тухай</li>
                            </Link>
                            <Link href='/#service'>
                                <li onClick={()=>setNav(false)} className='py-4  px-4  text-sm'>Вебсайт</li>
                            </Link>
                            <Link href='/#design'>
                                <li onClick={()=>setNav(false)} className='py-4  px-4  text-sm'>Постер дизайн</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={()=>setNav(false)} className='py-4 px-4 text-sm'>Бидэнтэй холбогдох</li>
                            </Link>
                        </ul>
                        <div className='flex justify-center mt-10'>
                        <div className='flex justify-center items-center'>
                            <div className='mt-8 flex'>
                                <h1 className='text-lg xs:mx-2 md:mx-4 lg:mx-28 text-white font-light hidden md:block'>All right reserved @2022 Bayarsuren</h1>
                                <div className='mx-1'>
                                <a href='https://www.facebook.com/profile.php?id=100086228687135'>
                                    <FaFacebookF className='border border-slate-700 rounded-lg transition ease-linear duration-300 hover:bg-blue-600 cursor-pointer  p-2' color='black' size={40}/>
                                </a>
                                </div>
                                <div className='mx-1'>
                                    <AiFillInstagram className='border border-slate-700 rounded-lg transition ease-linear duration-300  hover:bg-gradient-to-b hover:from-[#F40576] to-[#F4BC00] cursor-pointer  p-2' color='black' size={40}/>
                                </div>
                                <div className='mx-1'>
                                    {/* <a href='https://www.facebook.com/profile.php?id=100086228687135'> */}
                                    <AiOutlineTwitter className='border border-slate-700 rounded-lg transition ease-linear duration-300 hover:bg-blue-600 cursor-pointer  p-2' color='black' size={40}/>
                                    {/* </a> */}
                                </div>
                                <div className='mx-1'>
                                    <AiFillYoutube className='border border-slate-700 rounded-lg transition ease-linear duration-300 hover:bg-red-600 cursor-pointer  p-2' color='black' size={40}/>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-2 font-mono font-bold text-blue-800'>Утас: 8066-6605</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
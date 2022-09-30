import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

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
        <div className={shadow? 'fixed w-full py-4 shadow-md z-[100] bg-white ' : 'fixed w-full mt-4 h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full 2xl:px-16'>
                <div className='flex items-center mx-8'>
                    <Image src='/../public/logo/logo.png' width={80} height={80}/>
                    <div className=''>
                        <h1 className={shadow?'text-slate-900 text-2xl mx-2': 'text-white text-2xl mx-2 font-normal'}>GIILEN.MN</h1>
                        <h1 className='text-[10px] text-[#DF7200] mx-2'>TECHNOLOGY START UP</h1>
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
                            <li className='mx-4 text-sm uppercase hover:border-b'>Үйлчилгээ</li>
                        </Link>
                        <Link href='/'>
                            <li className='mx-4 text-sm uppercase hover:border-b'>Төслүүд</li>
                        </Link>
                        <Link href='/'>
                            <div className='relative bg-[#DF7200] text-white px-5 py-4 overflow-hidden rounded-full group mx-4'>
                                <li className='absolute w-64 h-64 md:mt-20 lg:mt-16 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-linear duration-300 bg-[#E636FF]  left-0 top-0'></li>
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
                <div className={ nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                                     : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                           <h1 className='text-slate-900 text-2xl'>Giilen.mn</h1>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                               <AiOutlineClose/>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%]'>Let's build legendary together</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contacts</li>
                            </Link>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
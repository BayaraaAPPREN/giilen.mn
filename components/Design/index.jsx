import Bogino from './bogino'
import Urt from './urt'
import { useState } from 'react';

const Design = () => {
    const [bogino, setBogino] = useState(true);
    const [urt, setUrt] = useState(false);
    const [pink, setPink] = useState(true);
    const [blue, setBlue] = useState(false);

    const HandlePink = () => {
        setBogino(true);
        setUrt(false);
        setBlue(false);
        setPink(true);
      };
      const HandleBlue = () => {
        setUrt(true);
        setBogino(false);
        setPink(false);
        setBlue(true);
      };

    const HandleBogino = () => {
        setUrt(true);
        setBogino(false);
      };
    
      const HandleUrt = () => {
        setBogino(true);
        setUrt(false);
      };
    
  return (
    <div id='design' className='bg-blueBack bg-cover bg-center py-20'>
      <div className='flex justify-center items-center'>
        <div className='mt-10'>
            <p className='mt-4 text-center text-white uppercase text-3xl'>Постер, Дизайн үйлчилгээ</p>
            <div>
                <div className='flex justify-center items-center mb-8'>
                    <div onClick={HandlePink} className={pink? ' bg-[#913BFF] w-40 text-center px-2 py-2 cursor-pointer text-slate-200 ring-2 ring-white mx-1' : 'bg-[#104CBA] w-36 text-center mx-0 text-slate-400 px-2 py-2 cursor-pointer '} >Богино хугааны</div>
                    <div onClick={HandleBlue} className={blue? ' bg-[#913BFF] w-40 text-center px-2 py-2 cursor-pointer text-slate-200  ring-2 ring-white mx-1' : 'bg-[#104CBA] w-36 text-center mx-0 text-slate-400 cursor-pointer px-2 py-2'} >Урт хугааны</div>
                </div>
              <div>{
                  urt ? (
                    <Urt/>
                  ) : ''
                  }
                </div>
                <div>{
                  bogino ? (
                    <Bogino/>
                  ) : ''
                  }
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Design;  

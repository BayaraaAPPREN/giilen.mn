import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const bogino = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  return (
    <div className='flex flex-wrap justify-center '>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Сайн байна уу
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Та захиалах бол 8066-6605 дугаарт өөрийн сонгож буй багцын нэрийг илгээнэ үү
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Таньд баярлалаа!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        <div className='group cursor-pointer mt-4'>
        <div className='mx-6 w-80 py-8 bg-[#08205D] bg-opacity-60 rounded-sm shadow-sm transition ease-linear duration-300 group-hover:ring-1  group-hover:ring-white  group-hover:bg-[#163a7d]'>
            <div className='mx-8'>
                <h1 className='text-white  text-2xl font-bold font-mono'>Энгийн багц</h1>
                <p className='text-[#A5BBE5] text-sm'>3ш постер дизайн эх бэлтгэл</p>
                <div className='flex items-center'>
                    <p className='font-bold text-2xl text-white'>50'000 ₮</p>
                    <p className='font-mono text-sm text-[#A5BBE5] ml-2'>/ 2 өдөрт</p>
                </div>
                <div className='border-b border-slate-600'></div>
                <div className='mt-4'>
                    <div className='flex mt-2'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white' />
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Фото эдит 2 удаа</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Эх файл</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Хэвлэлэхэд бэлэн</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Сошиал медиа дизайн</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Захиалгат график</p>
                    </div>
                        <div onClick={openModal} className='bg-[#913BFF] hover:shadow-2xl mt-4 py-2 text-center rounded-sm uppercase text-xs text-slate-100'>
                            Сонгох
                        </div>
                     </div>
            </div>
        </div>
        </div>
        <div className='group cursor-pointer mt-4'>
        <div className='mx-6 w-80 py-8 bg-[#08205D] bg-opacity-60 rounded-sm shadow-sm transition ease-linear duration-300 group-hover:ring-1  group-hover:ring-white  group-hover:bg-[#163a7d]'>
            <div className='mx-8'>
                <h1 className='text-white  text-2xl font-bold font-mono'>Стандарт багц</h1>
                <p className='text-[#A5BBE5] text-sm'>6ш постер дизайн эх бэлтгэл</p>
                <div className='flex items-center'>
                    <p className='font-bold text-2xl text-white'>95'000 ₮</p>
                    <p className='font-mono text-sm text-[#A5BBE5] ml-2'>/ 3 хоног</p>
                </div>
                <div className='border-b border-slate-600'></div>
                <div className='mt-4'>
                    <div className='flex mt-2'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white' />
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Фото эдит 6 удаа</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Эх файл</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Хэвлэлэхэд бэлэн</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Сошиал медиа дизайн</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Захиалгат график</p>
                    </div>
                        <div onClick={openModal} className='bg-[#913BFF] hover:shadow-2xl mt-4 py-2 text-center rounded-sm uppercase text-xs text-slate-100'>
                            Сонгох
                        </div>
                </div>
            </div>
        </div>
        </div>
        <div className='group cursor-pointer mt-4'>
        <div className='mx-6 w-80 py-8 bg-[#08205D] bg-opacity-60 rounded-sm shadow-sm transition ease-linear duration-300 group-hover:ring-1  group-hover:ring-white  group-hover:bg-[#163a7d]'>
            <div className='mx-8'>
                <h1 className='text-white  text-2xl font-bold font-mono'>Супер багц</h1>
                <p className='text-[#A5BBE5] text-sm'>12ш посет дизайн эх бэлтгэл</p>
                <div className='flex items-center'>
                    <p className='font-bold text-2xl text-white'>170'000 ₮</p>
                    <p className='font-mono text-sm text-[#A5BBE5] ml-2'>/ 7 хоног</p>
                </div>
                <div className='border-b border-slate-600'></div>
                <div className='mt-4'>
                <div className='flex mt-2'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white' />
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Фото эдит 6 удаа</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Эх файл</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Хэвлэлэхэд бэлэн</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Сошиал медиа дизайн</p>
                    </div>
                    <div className='flex'>
                        <AiOutlineCheck className='bg-[#08205D] rounded-full p-1 group-hover:bg-[#2D62C2]' size={20} color='white'/>
                        <p className='text-sm ml-2 text-[#A5BBE5]'>Захиалгат график</p>
                    </div>
                        <div onClick={openModal} className='bg-[#913BFF] mt-4 py-2 hover:shadow-2xl text-center rounded-sm uppercase text-xs text-slate-100'>
                            Сонгох
                        </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default bogino
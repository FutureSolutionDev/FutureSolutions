import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa';

type TestProps = {
  img: string;
  name: string;
  company: string;
  content: string;
  rating?: number;
}

export default function Testimonials({img, name, company, content, rating = 4}: TestProps) {
  return (
    <div className='!z-0 w-full mx-1 rounded-3xl flex flex-col gap-5 items-center bg-white text-black my-2 p-5 min-h-fit cursor-pointer'>
      <Image src={img} alt="" height={128} width={128} className='size-[128px] rounded-full' />
      <h4 className='font-semibold'>{name}</h4>
      <p className='text-[#737373]'>{company}</p>
      <div className="flex gap-3 justify-center">
        {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index} 
            size={20} 
            className={index < rating ? 'text-[#61d094]' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className='text-[#737373] w-[200px] h-[120px]'>{content}</p>
    </div>
  )
}
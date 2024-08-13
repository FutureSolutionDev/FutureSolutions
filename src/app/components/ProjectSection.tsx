import Image from 'next/image';
import React from 'react'
import Button from './Ui/Button';

type ProjectProps = {
  img:string;
  h3:string;
  p:string;
  active:Boolean;
  onClick:()=>void;
}
export default function ProjectSection({img,h3,p,active,onClick}:ProjectProps) {
  return (
    <div onClick={onClick} className={`${active?'bg-[#28408c]':'bg-white'} flex flex-col gap-3 items-center rounded-3xl pb-3 mx-1 cursor-pointer`}>
      <Image src={img} alt="" className='w-full rounded-t-3xl'/>
      <h3 className={`${active?'text-white':''} text-[32px]`}>{h3}</h3>
      <p className={`text-center ${active?'text-white':''} text-[20px]`}>{p}</p>
      <Button className={`${active?'!text-[#28408c] bg-white':'text-white bg-[#31a0fe] '} px-3`}>Preview</Button>
    </div>
  )
}

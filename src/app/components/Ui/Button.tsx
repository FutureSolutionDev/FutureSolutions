import React from 'react'

type BtnProps = {
  children: string;
  className?:string;
}
export default function Button({children, className}:BtnProps) {
  return (
    <button className={`bg-[#31a0fe] text-white hover:text-[#31a0fe] hover:bg-white p-2 rounded-full cursor-pointer ${className}`}>{children}</button>
  )
}

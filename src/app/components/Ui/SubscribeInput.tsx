import React from 'react'
import Button from './Button'
import { trans } from '@mongez/localization'

export default function SubscribeInput() {
  return (
    <div className="flex items-center justify-between gap-2 bg-white rounded-full py-2 px-4">
    <input placeholder={trans('Enter Email Address')} className='outline-none'/>
    <Button className='px-2'>{trans("Subscribe")}</Button>
  </div>
  )
}

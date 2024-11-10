import React from 'react'
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className='pt-32 container'>
        <div className='grid m:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5*1'>Get in touch </h2>
                <p className='text-gray-600 text-[18px] pt-2'>
                    Drop me a line, by email, through given email address.
                </p>
                <div className='flex gap-3 items-center'><AiFillMail size={30} />bakanwal@outlook.com</div>

            </div>

        </div>
      
    </div>
  )
}

export default Contact
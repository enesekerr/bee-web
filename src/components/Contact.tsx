import { Instagram, Mail, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div id="contact-section" className='p-10 flex flex-col items-center justify-center gap-6 md:flex-row md:justify-around'>
      
      <div className="flex items-center gap-2">
        <Phone className='text-orange-500' /> 
        <span className='text-gray-700 font-bold'>0555 444 3322</span>
      </div>

      
      <div className="flex items-center gap-2">
        <Instagram className='text-orange-500' />
        <span className='text-gray-700 font-bold'>@bal_eker</span>
      </div>
      
      
      <div className="flex items-center gap-2">
        <Mail className='text-orange-500' />
        <span className='text-gray-700 font-bold'>ekerrbal@gmail.com</span>
      </div>
    </div>
  )
};

export default Contact
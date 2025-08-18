import { House, Info, Phone, ShoppingBasket, User, } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';




const Navigation = () => {
  return (
    <div className='bg-orange-400 w-full border-t-1 shadow-2x1 flex justify-around py-5'>
        <div className="flex items-center">
            <span className="text-2xl font-extrabold tracking-wide text-gray-200 drop-shadow-lg">
                EKER
            </span>
    </div>
        <Link to="/">
            <button title='Anasayfa'>
                <House className='text-black hover:text-white transition cursor-pointer'/>
            </button>
        </Link>


        <Link to= "/shopping">
            <button title='Sepet'>
                <ShoppingBasket className='text-black hover:text-white transition cursor-pointer'/>
            </button>
        </Link>

        <a href="#contact-section" title='İletişim'>
        <button>
          <Phone className='text-black hover:text-white transition cursor-pointer' />
        </button>
      </a>

        <button title='Hakkımızda'>
            <Info className='text-black hover:text-white transition cursor-pointer'/>
        </button>

        <button title='Profil'>
            <User className='text-black hover:text-white transition cursor-pointer' />
        </button>








    </div>
  )
}

export default Navigation
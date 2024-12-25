import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../.././public/images/logo-adaptable-final-name.svg'
import {ButtonPrimary,ButtonSecondary} from './Button'

export default function Header() {
  return (
    <nav className='mt-5'>
        <div className='p-5 rounded-md shadow-md'>
            <div className='grid grid-flow-col items-center'>
                <div className='logo'>
                    <h1><Link href='/'><Image src={logo} alt='veritasMail' className='w-[25%]'></Image></Link></h1>
                </div>
                <div className="menu mr-5">
                    <ul className='flex gap-8 justify-end'>
                        <li><Link href='/' className='hover:text-primary transition-all'>Home</Link></li>
                        <li><Link href='/About' className='hover:text-primary transition-all'>Features</Link></li>
                        <li><Link href='/Contact-Us' className='hover:text-primary transition-all'>Pricing</Link></li>
                        <li><Link href='/Contact-Us' className='hover:text-primary transition-all'>API</Link></li>
                        <li><Link href='/support' className='hover:text-primary transition-all'>Support</Link></li>
                    </ul>
                </div>
                <div className='flex gap-5'>
                    <div>
                        <ButtonPrimary name='Log In'></ButtonPrimary>
                    </div>
                    <div>
                        <ButtonSecondary name='Sign Up'></ButtonSecondary>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

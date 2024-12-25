import React from 'react'
import { ButtonPrimary } from './Button'
import Image from 'next/image'
import image1 from '../../public/images/home-page2.png'

export default function Hero() {
  return (
    <section className="dark:bg-gray-900 relative w-full h-screen">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] mx-auto text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><span className="text-primary">veritas</span>Mail</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Effortless Email Validation Quick, Precise, & Dependable</p>
        <ButtonPrimary name="Sign Up"></ButtonPrimary>
      </div>
    </section>
  )
}

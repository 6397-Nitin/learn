import React from 'react'

export function ButtonPrimary(props) {
  return (
    <button className="text-red hover:before:bg-redborder-red-500 rounded-lg relative h-[50px] w-40 overflow-hidden border border-primary bg-white px-3 text-primary transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"><span className="relative z-10">{props.name}</span></button>
  )
}


export function ButtonSecondary(props) {
    return (
      <button className="relative h-[50px] w-40 overflow-hidden rounded-lg border border-black bg-white text-primary transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:before:w-2/4 hover:before:bg-primary hover:border-primary hover:after:w-2/4 hover:after:bg-primary"><span className="relative z-10">{props.name}</span></button>
    )
  }
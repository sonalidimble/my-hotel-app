import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
         <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
 
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className="w-8" src="/hotel.png" alt="" />
        <span className="ml-3 text-xl">My Hotel App</span>
      </a>
     
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/home" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900">About Us</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
      <Link href="/hotels" className="mr-5 hover:text-gray-900">Hotels</Link>
    </nav>
    <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Login</button>

  </div>
</header>
    </div>
  )
}

export default Navbar
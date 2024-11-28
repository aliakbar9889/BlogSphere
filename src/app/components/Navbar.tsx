import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      {/* Navbar Content */}
      <nav className="relative z-10 mt-4 p-4 ">
        <div className="flex justify-between items-center">
          {/* Left Side: Logo */}
          <div className="flex items-center ml-6">
            <Link href="/home">
            <Image
              src="/pic2.png" // Replace with your actual logo path
              alt="Logo"
              width={180}
              height={50}
              className="rounded-full"
            />
            </Link>
          </div>

          {/* Right Side: Button */}
          <div>
            <button className="bg-blue-600 mr-8 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300">
            <Link href="/blog"><b><i>Blogs</i></b></Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const CustomComponent = () => {
  return (
    <div className="flex flex-col items-center py-20">
      {/* Top Heading */}
      <h1 data-aos="fade-down-left" className="text-2xl font-bold italic text-center text-white">
        <b><i>OUR <span className='text-yellow-500'>BLOGS</span></i></b>
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Card 1 */}
        <div
          data-aos="fade-down-left"
          className="hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/card1.png" alt="Card Image 1" width={500} height={300} className="w-full h-auto" />
            <button className="text-white bg-black"><Link href="/blog1">VIEW BLOG</Link></button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-down-left"
          className="hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/card2.png" alt="Card Image 2" width={500} height={300} className="w-full h-auto" />
            <button className="text-white bg-black"><Link href="/blog2">VIEW BLOG</Link></button>
            
          </div>
          
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-down-left"
          className="hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/card3.png" alt="Card Image 3" width={500} height={300} className="w-full h-auto" />
            <button className="text-white bg-black"><Link href="/blog3">VIEW BLOG</Link></button>
          </div>
        </div>
        <div
          data-aos="fade-down-left"
          className="hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/card4.png" alt="Card Image 2" width={500} height={300} className="w-full h-auto" />
            <button className="text-white bg-black"><Link href="/blog4">VIEW BLOG</Link></button>
            
          </div>
          
        </div>
        <div
          data-aos="fade-down-left"
          className="hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/card5.png" alt="Card Image 2" width={500} height={300} className="w-full h-auto" />
            <button className="text-white bg-black"><Link href="/blog5">VIEW BLOG</Link></button>
            
          </div>
          
        </div>
        <div
          data-aos="fade-down-left"
          className="hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/card6.png" alt="Card Image 2" width={500} height={300} className="w-full h-auto" />
            <button className="text-white bg-black"><Link href="/blog6">VIEW BLOG</Link></button>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;

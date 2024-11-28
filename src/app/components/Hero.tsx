'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Importing the Image component from next/image

const Hero: React.FC = () => {
  return (
    <main>
      <section className="flex justify-between items-center px-12 py-20 flex-col-reverse md:flex-row">
        {/* Left Content */}
        <div className="hero-content text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-5">
            <b>Explore The Most Informative Blogs!</b>
          </h1>
          <p className="text-lg text-gray-600 leading-loose italic mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos totam error consectetur sapiente necessitatibus mollitia exercitationem consequuntur nemo aperiam, ipsam soluta nisi facere beatae ullam porro voluptatem ducimus facilis quod nostrum quis excepturi nulla atque distinctio? Molestias perspiciatis sint quasi, inventore iste numquam illum nemo? Natus consectetur animi aperiam optio reprehenderit explicabo unde quod recusandae?
          </p>
          <button
            id="createResumeBtn"
            className="cta-button px-6 py-3 bg-blue-800 text-white font-bold rounded-md hover:bg-red-600 transition-all"
          >
            <Link href="/blog">
              <span className="no-underline text-white">
                <b><i>Explore</i></b>
              </span>
            </Link>
          </button>
        </div>

        {/* Right Image */}
        <div className="hero-image hidden md:block">
          <Image
            src="/pic1.png" // Image source
            alt="heroimg" // Alt text for accessibility
            width={500} // Specify width for image optimization
            height={500} // Specify height for image optimization
            className="max-w-lg rounded-lg shadow-md"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;

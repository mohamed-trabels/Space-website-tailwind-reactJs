import React from 'react'
import Mountain from '../assets/moon-surface-hd.png'

const Hero = () => {
  return (
    <div 
     className=" bg-black/20 h-full">
      <div data-aos-duration="3000" data-aos="fade-left" className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos-duration="3500" data-aos="fade-left" className="text-5xl font-bold">
              ORBIT THE EARTH
            </h1>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
              dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
              tempora similique dignissimos repellat aperiam veniam culpa
              consequatur repudiandae asperiores saepe.
            </p>
            <button
              
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <img
        src={Mountain}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>

    </div>
  )
}

export default Hero
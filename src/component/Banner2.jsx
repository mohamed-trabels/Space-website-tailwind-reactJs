import React from 'react'
import satelite2 from '../assets/satelite2.jpg'

const Banner2 = () => {
  return (
    <div  className=' bg-black text-white pb-4'>
        <div className=' container grid grid-cols-1 sm:grid-cols-2 gap-4'>
            
            <div data-aos="fade-up" data-aos-delay="300" className=' border-solid border-b-2 border-r-2 border-r-sky-500 border-b-sky-500 bg-black items-center  p-3 space-y-4'>
                <h1 className=' text-xl font-thin text-center text-blue-700'>OUR MISSION</h1>
                <h1 className=' text-5xl text-center font-semibold'>RAPIDCAST</h1>
                <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt.</p>
                
                
                <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
            >
              LEARN MORE
            </button>  
                          
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className=' flex h-full items-center justify-center p-2'>
                <img src={satelite2} className=' h-52 w-69' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner2
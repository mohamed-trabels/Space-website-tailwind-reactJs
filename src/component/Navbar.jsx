import React from 'react'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div data-aos-duration="3000" data-aos="fade-down" className =' top-0 right-0 w-full fixed z-20  bg-black/10 backdrop-blur-sm  py-4 sm:py-4'>
        <div className='  container  '>
            <div className=' flex  items-center justify-between'>
                    <div className=' flex  items-center  justify-center text-white text-2xl   font-bold '>
                        <img className=' h-12' src={Logo}     />
                        <h1>TCJ-SPACE</h1>
                    </div>
                <div>
                    <ul>
                        <li className= ' hidden sm:block text-white font-semibold space-x-4  '>
                            <a href=""  className='' > About </a>
                            <a href="" className=' hover:drop-shadow-2xl'>Technology</a>
                            <a href="">Galaxy</a>
                            <a href="" className=' hover:shadow-yellow-400'>Satelite</a>
                        </li>
                    </ul>
                </div>
                <div className=' items-center'>
                    <button className=  ' sm: w-32 rounded-full border-2 border-black shadow-inner shadow-yellow-400  hover:bg-cyan-800 text-white font-bold  text-xl '>Let's Go</button>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Navbar
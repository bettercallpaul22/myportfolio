import React from 'react'
import Css from '../assets/css.png'
import Aws from '../assets/aws.png'
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import Tailwind from '../assets/tailwind.png'
import Html from '../assets/html.png'
import Reactjs from '../assets/react.png'
import { GoTools } from 'react-icons/go'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-400'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full   '>
                <div>
                    <p className=' text-4xl font-bold py-4 '>Skills</p>
                    <p className='py-4'>These are the technology i have worked with <GoTools size={20}/></p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8  '>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500   '>
                        <img className='w-20 m-auto' src={Html} alt="" />
                        <p className='py-4'>HTML</p>
                    </div>
                  
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500   '>
                        <img className='w-20 m-auto' src={JavaScript} alt="" />
                        <p className='py-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500   '>
                        <img className='w-20 m-auto' src={Reactjs} alt="" />
                        <p className='py-4'>React-Js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500   '>
                        <img className='w-20 m-auto' src={Node} alt="" />
                        <p className='py-4'>Node-Js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500   '>
                        <img className='w-20 m-auto' src={Mongo} alt="" />
                        <p className='py-4'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500   '>
                        <img className='w-20 m-auto' src={Css} alt="" />
                        <p className='py-4'>Css</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500   '>
                        <img className='w-20 m-auto' src={Tailwind} alt="" />
                        <p className='py-4'>Tailwind Css</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills
import { Button } from '@material-ui/core'
import { AiOutlineArrowRight } from 'react-icons/ai'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const HomeContainer = styled.div``

const Home = () => {
    return (
        <HomeContainer name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='flex max-w-[1000px] mx-auto flex-col justify-center h-full ml-10 sm:ml-40'>
                <p className='text-pink-600 py-2  text-2xl sm:text-3xl'>Hi, My name is..</p>
                <h1 className='text-[#ccd6f6]  text-5xl font-bold sm:text-6xl' >Obaro Paul</h1>
                <h2 className='text-[#8892b0] py-2  text-3xl font-bold max-w-[20rem] sm:text-4xl max-w-[80%] '>I am a Front-End web developer</h2>
                <p className='max-w-[25rem] py-2 text-[#8892b0] sm:max-w-lg '>
                    I build Dynamic and responsive client side  websites, with nice display and animation.
                    And i write readable code and keep it simple
                </p>
                <Link  to="skills" ssmooth={true} duration={500} >
             
            
                <div className='sm:py-2'>
                    <button className=' group text-white border-2 h-10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 ' >
                        View Skills
                        <span className='group-hover:rotate-90 duration-200'>
                            <AiOutlineArrowRight className=' ml-4' />
                        </span>
                    </button>

                </div>
                </Link>
            </div>
        </HomeContainer>
    )
}

export default Home
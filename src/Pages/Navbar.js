
import { AppBar, Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { FaHamburger } from 'react-icons/fa'
import { GiCandlebright } from 'react-icons/gi'
import { GrClose, GrTwitter } from 'react-icons/gr'
import { BsGithub, BsFacebook } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { Link } from 'react-scroll'



const Logo = styled.div``
const NavTabs = styled.div``
const Tab = styled.div``
const Hamburger = styled.div``
const NavbarContainer = styled.div``
const SocialIcons = styled.div``
const IconsContainer = styled.div``



const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div>
      <NavbarContainer
        className='w-full fixed  bg-[#0a1d38] h-[80px] flex justify-between items-center'
      >
       <Link  to="home" ssmooth={true} duration={500} className='cursor-pointer' >
       <Logo><GiCandlebright color={'red'} size={40} /></Logo>
       </Link>
        


        <NavTabs className='hidden sm:flex mr-[5rem] text-cyan-50 justify-around w-[30rem]' >
          <Tab className='text-2xl cursor-pointer'>
            <Link  to="home" ssmooth={true} duration={500} >
              Home
            </Link>
          </Tab>
          <Tab className='text-2xl cursor-pointer'>
            <Link  to="about" ssmooth={true} duration={500} >
              About
            </Link>
          </Tab>
          <Tab className='text-2xl cursor-pointer'>
            <Link  to="skills" ssmooth={true} duration={500} >
              Skills
            </Link>
          </Tab>
          <Tab className='text-2xl cursor-pointer'>
            <Link  to="work" ssmooth={true} duration={500} >
              Work
            </Link>
          </Tab>
          <Tab className='text-2xl cursor-pointer'>
            <Link  to="contact" ssmooth={true} duration={500} >
              Contact
            </Link>
          </Tab>


        </NavTabs>

        {/*HAMBURGER */}
        <Hamburger className='mx-[1rem] sm:hidden'>
          <FaHamburger size={35} color={'white'} onClick={() => handleMenu()} className='cursor-pointer' />

        </Hamburger>
        {/* MOBILE MENU */}
        {!menu ? null : <NavTabs className='absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center  text-cyan-50  bg-[#0a1d38] sm:hidden duration-300'>
          <GrClose color={'white'} size={35} onClick={() => handleMenu()} className='absolute top-8 height cursor-pointer  text-cyan-50' />
          <Tab className='text-2xl py-5 cursor-pointer'>
            <Link onClick={()=>handleMenu()}  to="home" ssmooth={true} duration={500} >
              Home
            </Link>
          </Tab>
          <Tab className='text-2xl py-5 cursor-pointer'>
            <Link onClick={()=>handleMenu()}  to="about" ssmooth={true} duration={500} >
              About
            </Link>
          </Tab>
          <Tab className='text-2xl py-5 cursor-pointer'>
            <Link  onClick={()=>handleMenu()} to="skills" ssmooth={true} duration={500} >
              Skills
            </Link>
          </Tab>
          <Tab className='text-2xl py-5 cursor-pointer'>
            <Link  onClick={()=>handleMenu()} to="work" ssmooth={true} duration={500} >
              Work
            </Link>
          </Tab>
          <Tab className='text-2xl py-5 cursor-pointer'>
            <Link onClick={()=>handleMenu()}  to="contact" ssmooth={true} duration={500} >
              Contact
            </Link>
          </Tab>
        </NavTabs>}
        {/* SOCILA ICONS */}
        <SocialIcons className='hidden sm:flex flex-col fixed left-0 top-[50%] '>
          <IconsContainer className='flex items-center justify-center w-[160px] h-[50px]  bg-gray-600 ml-[-100px] hover:ml-[-10px] duration-300'>
            <a href="https://github.com/" className='flex items-center justify-around w-full   '>
              <Typography variant='h6'>Github</Typography>
              <BsGithub size={32} />
            </a>

          </IconsContainer>
          <IconsContainer className='flex items-center justify-center w-[160px] h-[50px] bg-blue-400 ml-[-100px] hover:ml-[-10px] duration-300'>
            <a href="https://www.linkedin.com/in/obaro-paul-319463101" className='flex items-center justify-around w-full   '>
              <Typography variant='h6'>Linkedin</Typography>
              <ImLinkedin size={32} />
            </a>

          </IconsContainer>
          <IconsContainer className='flex items-center justify-center w-[160px] h-[50px] bg-blue-600 ml-[-100px] hover:ml-[-10px] duration-300'>
            <a href="https://twitter.com/BETER_CALL_PAUL" className='flex items-center justify-around w-full   '>
              <Typography variant='h6'>Twitter</Typography>
              <GrTwitter color={'white'} size={32} />
            </a>

          </IconsContainer>

        </SocialIcons>
      </NavbarContainer>
    </div>
  )
}

export default Navbar
import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
            <div className="flex flex-col justify-center items-center w-fulln h-full">
                <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4 '>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>About</p>
                    </div>
                    <div></div>

                    
                    </div>
                    <div className='max-w-[1000px] px-4 w-full grid sm:grid-cols-2 gap-8 '>
                        <div>
                            <p className='text-3xl  font-bold ms:ml-15'>Hi, I'm Paul, nice to meet you, pls take a look around.</p>
                        </div>
                        <div>
                             <p>
                                I am Paul, A frontEnd developer, i am passionate about implementing design that meets 
                                customer satisfaction, i write simple codes that solves problems
                             </p>
                        </div>
                    </div>
                </div>

            </div>

      
    )
}

export default About
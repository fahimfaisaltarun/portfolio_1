import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
            <SectionTitle>About Me</SectionTitle>
            <p className='text-md text-gray-600 dark:text-gray-300 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            <a href='mailto:fahimfaisaltarun@gmail.com' className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-700'>fahimfaisaltarun@gmail.com</a>
        </div>
        <img src={`https://avatars.githubusercontent.com/u/99664218?s=400&u=6fc07203cb129753f8e71d380e9b916a4d1319c4&v=4`} alt='Fahim Faisal' className='w-full md:w-6/12 rounded-lg object-cover'></img>
    </div>
  )
}

export default About
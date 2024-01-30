import React from 'react'

const Intro = () => {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white px-1.5'>Hi ,I am</h1>
        <h1 className='text-6xl text-secondary font-semibold'>Rahul Kumar Singh </h1>
        <h1 className='text-4xl text-white font-semibold'>I build things for the web </h1>
        <p className='text-white w-2/3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</p>
        <button className='border-2 border-tertiary px-10 py-3  text-tertiary rounded'>Get Started</button>
    </div>
  )
}

export default Intro
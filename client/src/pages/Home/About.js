import React from 'react'
import SectionTitle from '../../components/SectionTitle'

const About = () => {
  return (
    <div>
        <SectionTitle title="About" />
       <div className='flex w-full items-center'>
        <div className='H-[70vh] w-1/2'>
       <dotlottie-player src="https://lottie.host/944bd9f2-1005-4886-a988-7f2f0c958dd9/S7qAfxFEa1.json" background="transparent" speed="1"  loop autoplay ></dotlottie-player>
        </div>
        <div className='flex flex-col gap-5 w-1/2'>
          <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p></div></div>

    </div>
  )
}

export default About
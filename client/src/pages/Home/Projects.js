import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';
const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (
    <div>
        <SectionTitle title="Projects"  />
        <div className="flex py-10 gap-10 sm:gap:20 sm:flex-col">
        <div className="flex flex-col gap-1  border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => {
            return (
              <div
                onClick={() => {
                  setSelectedItemIndex(index);
                }}
                className="p-5 cursor-pointer"
              >
                <h1
                  className={`text-xl px-0 ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4  bg-[#1a7f5a5f] -ml-[23px] py-3 sm:w-full"
                      : "text-white"
                  } `}
                >
                  {project.title}
                </h1>
              </div>
            );
          })}
        </div>
      <div className='flex items-center justify-center gap-10 sm:flex-col'>  
      <img src={projects[selectedItemIndex].image} alt="imagetext" className='h-60 w-72'></img>
        
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl py-5 sm:py-0">
            {projects[selectedItemIndex].title}
          </h1>
         
          <p className='text-white'>{projects[selectedItemIndex].descriptions}</p>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to m when an unknown printer took a galley of type
            and scrambled it to m
          </p>
        </div></div>
      </div>
    </div>
  )
}

export default Projects
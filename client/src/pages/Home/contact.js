import React from 'react'
import SectionTitle from '../../components/SectionTitle'

const Contact = () => {

const user = {
    name:"Rahul Kumar Singh",
    age: null,
    gender:"Male",
    email:"contactrahulkrsingh@gmail.com",
    mobile:"12457863xx",
    country:"INDIA"
}

  return (
    <div><SectionTitle title="Say Hello"/>
    <div className="flex sm:flex-col items-center ml-60 sm:ml-0">
    <div className="flex flex-col gap-1">
      <p className="text-tertiary">{"{"}</p>
      {Object.keys(user).map((key)=>(
        <p className="ml-5">
          <span className="text-tertiary">{key}:</span>{" "}
          <span className="text-tertiary">{user[key]}</span>
        </p>
      ))}
      <p className="text-tertiary">{"}"}</p>
      
    </div>
    <div className="h-[400px] "> 

<dotlottie-player src="https://lottie.host/1004f256-5d6d-4281-8af5-e38bb9a6bd69/dVlGsJmxcc.json" background="transparent" speed="0.75"  loop autoplay></dotlottie-player></div>
    </div>
    </div>
  )
}

export default Contact
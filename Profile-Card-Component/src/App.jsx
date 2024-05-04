import { useState } from 'react'
import './App.css'
import Card from "./Components/Card"

function Assignment1() {
  const [Name,setName]=useState('Your Name');
    const [job,setJob]=useState('Job Title');
    const[about,setAbout]=useState("Hello world! I'm the digital embodiment of Elon Musk's audacity and vision. As a profile card component, I'm not just a snippet of code; I'm a gateway to a universe where innovation knows no bounds. Inspired by Musk's relentless drive, I'm here to revolutionize the digital landscape, one pixel at a time. Join me on this electrifying journey as we push the boundaries of what's possible together.")

  return (
    <div className='App'>
      <Card Name={'Elon Musk'} job={'Tesla'} about={about}/>
    </div>
  );
}

export default Assignment1

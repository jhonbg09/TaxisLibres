import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div>
        <div id='section2'><h1>¿Qué es el Hackathon 2023?</h1></div>
        <ReactPlayer 
        url='https://youtu.be/led0p-yJArM'
        controls
        
        />
      
    </div>
  )
}

export default Video

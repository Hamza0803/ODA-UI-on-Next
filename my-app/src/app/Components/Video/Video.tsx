"use client"
import React from 'react'
function Video() {
  return (
    <div className='margin-left 50 border border-gray-900 bg-opacity-30' style={{
    position: 'absolute',
    top: 53,
    right: 422,
    display: 'flex',
    borderWidth: '2px' }}>
    <video width="578" height="410" controls preload="none" autoPlay loop style={{ float: "right" }}>
        
        <source src="/videos/Truckvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
};

export default Video;

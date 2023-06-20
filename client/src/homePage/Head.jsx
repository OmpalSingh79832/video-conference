import React from 'react'
import { Link } from 'react-router-dom'
import "./head.css"
import Client from "../assets/video1.mp4"
import Nav from './Nav'

function Head() {
  return (
    <>
    <Nav/>
    <div className='contaner'>
            
        <div className="head-content">
            
            <div className="content1">
              <h1>One platform to <span>connect anyone</span></h1>
              <p>Bring teams together, reimagine workspaces, engage new audiences, and delight your customers --all on <span>JOS MEET</span> platform you know and love</p>
              <button className='btn1'><Link to="Pay">View My Plan</Link></button>
              <button className='btns'><Link to="signup">Sign Up, It's Free</Link></button>

            </div>
           
        </div>
      
    </div>
    <div className="feature">
      <div className="feature1">
        <h1>Features</h1>
        <div className="virtual-meeting">
          <h2>Virtual Meetings</h2>
          <p>connect virtually from anywhere with JOS MEET </p>
        </div>
        <div className="team-chat">
          <h2>Team Chat</h2>
          <p>Collaborate together with JOS MEET Team Chat</p>
        </div>
        <div className="online-whiteboard"></div>
        <h2>Online Jamboard</h2>
        <p>Create and brainstorm with JOS MEET Jamboard</p>
        <div className="video-calling">
          <h2>Video Calling</h2>
          <p>Meet face-to-face from any device</p>
        </div>
        <div className="file-sharing">
          <h2>File Sharing</h2>
          <p>Share the any file from the client with JOS MEET</p>
        </div>
      </div>
    <div className="content2">
            <video autoPlay loop muted >
              <source src={Client} type='video/mp4'/>
            </video>
            </div>
    </div>
    </>
  )
}

export default Head

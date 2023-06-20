import React from "react";
import "./card.css";

import GOOGLE from '../../assets/g.webp'
import EMAIL from '../../assets/v.webp'
import PRIMIUM from '../../assets/img2.webp'
import PRIMIUM1 from '../../assets/pre.jpeg'
import { Link } from "react-router-dom";

import {AiFillCheckCircle} from "react-icons/ai"
import {RxCrossCircled} from "react-icons/rx"

function Card({ title, imageUrl, body,button }) {
  return (
    <>
    {/* google login */}
    <div className="card-container">
      <div className="image-container">
        <p className="con">Free</p>
      <Link to="/login">
        <img src={GOOGLE} alt="" />
        </Link>
      </div>
      <Link to="/login" className="a">
      <div className="card-content">
        <div className="card-title">
          <h3>Login with google</h3>
        </div>
        <div className="card-body">
          <p>User can login with google for free and 20 user are connected with JOS MEET you can meet with video conference</p>
          <p><AiFillCheckCircle className="ai"/> Free</p>
          <p><AiFillCheckCircle className="ai"/> 20 team members</p>
          <p><RxCrossCircled className="ai1"/> Filesharing</p>
          <p><RxCrossCircled className="ai1"/> Whiteboard</p>
        </div>
      </div>
      </Link>
      <div className="btn">
        <button>
          
          <Link to="/login">Choose Plan</Link>
        </button>
      </div>
    
    </div>
    {/* Email SignUp */}
    <div className="card-container">
      <div className="image-container">
      <p className="con">Free</p>
      <Link to="/signup">
        <img src={EMAIL} alt="" />
        </Link>
      </div>
      <Link to="/signup" className="a">
      <div className="card-content">
        <div className="card-title">
          <h3>Registration with email </h3>
        </div>
        <div className="card-body">
          <p>User can Registration with email account for free and 50 user are connected with JOS MEET you can meet video conference</p>
          <p><AiFillCheckCircle className="ai"/> Free</p>
          <p><AiFillCheckCircle className="ai"/> 50 team members</p>
          <p><RxCrossCircled className="ai1"/> Filesharing</p>
          
          <p><RxCrossCircled className="ai1"/> Whiteboard</p>
          
          
        </div>
      </div>
      </Link>
      <div className="btn">
        <button>
          
          <Link to="/signup">Choose Plan</Link>
        </button>
      </div>
    
    </div>
    {/* Primium 100 user */}
    <div className="card-container">
      <div className="image-container">
    <Link to="/SignUpP">
        <img src={PRIMIUM} alt="" />
        </Link>
      </div>
      <Link to="/SignUpP" className="a">
      <div className="card-content">
      
        <div className="card-title">
          <h3>Premium</h3>
        </div>
        <div className="card-body">
          <p>This is a premium plan and i which 100 user are connect with JOS MEET and this is one meeting plan limited user</p>
          <p><AiFillCheckCircle className="ai"/> Premium</p>
          <p><AiFillCheckCircle className="ai"/> 100 team members</p>
          <p><AiFillCheckCircle className="ai"/> File Sharing</p>
          <p><RxCrossCircled className="ai1"/> Whiteboard</p>
        </div>
      </div>
      </Link>
      <div className="btn">
        <button>
          
          <Link to="/SignUpP">Choose Plan</Link>
        </button>
      </div>
    
    </div>
    {/* Super primium */}
    <div className="card-container">
      <div className="image-container">
      <Link to="/SignUpP">
        <img src={PRIMIUM1} alt="" />
        </Link>
      </div>
      <Link to="/SignUpP" className="a">
      <div className="card-content">
        <div className="card-title">
          <h3>Professional</h3>
        </div>
        <div className="card-body">
          <p>This is a premium plan and i which 500 user are connect with JOS MEET and this is monthly basis meeting plan and no meeting limit</p>
          <p><AiFillCheckCircle className="ai"/> 500 team members</p>
          <p><AiFillCheckCircle className="ai"/> Team meeting</p>
          <p><AiFillCheckCircle className="ai"/> File sharing</p>
          <p><AiFillCheckCircle className="ai"/> Whiteboard</p>
        </div>
      </div>
      </Link>
      <div className="btn">
        <button>
          
          <Link to="/SignUpP">Choose Plan</Link>
        </button>
      </div>
    
    </div>
    </>
  );
}

export default Card;

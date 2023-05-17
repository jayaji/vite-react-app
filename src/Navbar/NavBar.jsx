import React from 'react';
import { useState } from 'react';
import './navbar.css'

export default function NavBar() {
  const [isActive, setIsActive]=useState(true);
  function handleClick(){
    setIsActive(current=>!current);
  }
  return (
    <div className='navigation'>
     <div className="logo">Ocean</div>
     <button type="submit" onClick={handleClick}>Menu</button>
     <div className="link" style={{display: isActive?'block':'none'}}>
        <a href="/" className="tab">Home</a>
        <a href="/" className="tab">About</a>
        <a href="/" className="tab">Services</a>
        <a href="/" className="tab">Testimonials</a>
        <a href="/" className="tab">Contacts</a>
     </div>
     
    </div>   
  )
}

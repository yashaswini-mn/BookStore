import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"
// import "../App.css

const Home = () => {
  const image=require("../images/imagessss.webp")
  return (
    <div className="Home-page bg-dark text-white container-fluid d-flex justify-content-center align-items-center flex-column">
    <div className='row container' style={{display:"flex",justifyContent:"space-around"}}>
      <div
      className='col-lg-6 d-flex justify-content-center align-items-start flex-column'
      style={{height:"91.5vh"}}
      >
        <h2 style = {{fontSize:"90px"}}>BOOK STORE</h2>
        <h3 style = {{fontSize:"50px"}}>FOR YOU</h3>
        <p className='"mb-0' style={{color:"silver", fontSize:"25px"}}>CheckOut The Books From Here</p>
        <Link to="/books" className='viewBook my-3'>View Books</Link>
      </div>
      <div 
      className='col-lg-6 d-flex justify-content-center align-items-center gap-100 flex-column'
      style={{height:"91.5vh"}}
      >
      <img
      className='img-fluid gap-100' src={image} alt="/"/>
      </div>
    </div>
    </div>
  )
}

export default Home;

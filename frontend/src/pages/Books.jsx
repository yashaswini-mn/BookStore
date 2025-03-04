import React from 'react';
import BookSection from '../components/BookSection'
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
const Books = () => {
   const[Data, setData]=useState();
  useEffect(()=>{
    const fetch = async()=>{
      await axios.get("http://localhost:1000/book/getbooks")
      .then((res)=>
      console.log(res.data))
    }
    fetch();
  },[]);




  return (
    <div className='bg-dark' style={{minHeight:"91.5vh"}}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h3 className="text-white">Books Section</h3>
       
    </div>
    {Data ? <BookSection data={Data} />: <div className="text-white">  Loading..</div>}
    </div>
  )
}

export default Books

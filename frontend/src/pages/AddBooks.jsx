import React from 'react'

const AddBooks = () => {
    return (
        <div className='bg-dark d-flex justify-content-center align-items-center' style={{ minHeight: "91.5vh" }}>
            <div className="container p-5">
           <div className='mb-3 p-3'>
            <label
            for="exampleFormControlInput1"
            className='form-label text-white'
            >Book Name</label>
            <input
            type="text"
            className='form-control'
            id="exampleFormControlInput1"
            placeholder='Enter Book Name'/>
            
           </div>
           <div className='mb-3 p-3'>
            <label
            for="exampleFormControlInput1"
            className='form-label text-white'
            >Author Name</label>
            <input
            type="text"
            className='form-control'
            id="exampleFormControlInput1"
            placeholder='Enter the Name of Author'/>
            
           </div>
           <div className='mb-3 p-3'>
            <label
            for="exampleFormControlInput1"
            className='form-label text-white'
            >Description</label>
            <input
            type="text"
            className='form-control'
            id="exampleFormControlInput1"
            placeholder='Enter Description of the Book'/>
            
           </div>
           <div className='mb-3 p-3'>
            <label
            for="exampleFormControlInput1"
            className='form-label text-white'
            >Image</label>
            <input
            type="text"
            className='form-control'
            id="exampleFormControlInput1"
            placeholder='Enter the URL of the image'/>
            
           </div>
           <div className='mb-3 p-3'>
            <label
            for="exampleFormControlInput1"
            className='form-label text-white'
            >Price</label>
            <input
            type="number"
            className='form-control'
            id="exampleFormControlInput1"
            placeholder='Enter the price'/>
            
           </div>
           <button className='btn btn-success mx-3 P-3'>Submit</button>
           </div>
  </div >
  );
}

export default AddBooks

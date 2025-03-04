import React from 'react'

const BookSection = ({ data }) => {
    console.log(data)
  return (
    <div className='d-flex justify-conteng-around align-items-center flex-wrap'>
      {data && 
      data.map((item, index)=>{
        <div className='' style={{width:"200px", height:"350px", backgroundColor:"white"}}>
            <div>
                <img
                style={{width:"200px", height:"150px"}}
                className='img-fluid'



                src={item.image}
                alt="/"
                />
            </div>
            <h6 className='text-white px-2 m-0' style={{fontSize:"15px"}}> {item.bookname.slice(0, 20)}....</h6>
            <p className="m-0 px-2" style={{fontSize:"25px"}}>Rs. {item.price}</p>
        </div>
 } )}
      </div>
     
  );
};

export default BookSection;

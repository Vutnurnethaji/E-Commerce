import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Star = ({stars, reviews}) => {
   const ratedArray=Array.from({length:5},(el,i)=>{
        const number=i+0.5;
        
        return <span style={{ color:'gold'}} key={i}>
            {
                stars >= i+1 ? <FaStar /> : stars >= number ? <FaStarHalfAlt />:<FaRegStar />
            }
        </span>
   })
  return (
    <>
      <div style={{display:'flex',gap:'10px' }}>
        <div style={{display:'flex'}}>
        {ratedArray}
        </div>
        <span>({reviews} customer reviews)</span>
      </div>
    </>
  )
}

export default Star
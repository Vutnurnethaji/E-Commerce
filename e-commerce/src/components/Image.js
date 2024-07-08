import React, { useEffect, useState } from 'react';
import './ImageStyles.css'

const Image = ({img=[{url:''}]}) => {
    const initialPic = img.length > 0 ? img[0] : { url: '', filename: '' };

    // State for the currently selected image
    const [pic, setPic] = useState(initialPic);
  
    // Effect to update pic whenever img prop changes
    useEffect(() => {
        // Only update pic if the first image is different from the current pic
        if (img.length > 0 && img[0].url !== pic.url) {
          setPic(img[0]);
        }
      }, [img]);

    const reload=(el)=>{
       console.log("Iam In", el);
       setPic(el)
    }
  return (
    <>
    <div className='imageLeft'>
       {
        <div className='singleImage'>
            {
                 img.map((el)=>{
                    return ( <img src={el.url} alt={el.filename} key={el.id} onClick={()=>reload(el)}/>)
                 })
            }
        </div>
       }
    </div>
    <div className='imageRight'>
          {
             <img src={pic.url} alt={pic.filename}/>
          }
    </div>
    </>
  )
}

export default Image
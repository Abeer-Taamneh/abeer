import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import {AddCircleOutline} from '@mui/icons-material';
function BrandsForm({brand,OnNameenChanged,OnNamearChanged,onSubmit}) {
  return (
    <div>
      <TextField 
        label="Nameen" 
        variant="filled" 
        color="success" 
        focused 
        className='m-2' 
        placeholder='الاسم بالانجليزيه'
        onChange={(e)=>{
          OnNameenChanged(e.target.value)  
        }}
        value={brand.nameen}
    />
      <TextField
        label="namear"
        variant="filled"
        color="success"
        focused  
        className='m-2' 
        placeholder='الاسم بالعربي'
        onChange={(e)=>{
          OnNamearChanged ( e.target.value)
        }}
        value={brand.namear}
      />

    <IconButton aria-label="delete"  color="secondary" className='my-auto' 
        onClick={ ()=>onSubmit() }
      >
      <AddCircleOutline />
    </IconButton>

           
    </div>
  );
}

export default BrandsForm;

 //  <button 
          //     onClick={()=>{
          //       onSubmit();
                
          //    }}  
          //   > 
          //    add  
          // </button>
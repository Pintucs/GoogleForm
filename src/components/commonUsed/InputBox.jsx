import React from 'react'
import { TextField } from '@mui/material'

const InputBox = ({name}) => {

  return (
    <>
    <form className="p-3 m-3 " style={{backgroundColor:"white",borderRadius:"10px"}}>
      <div className="mb-3">
        <label htmlFor="inputBox" className="form-label">{name}</label>
        <br/>
          <TextField id="standard-basic" variant="standard" placeholder="Your answer"style={{width:"100%"}}/>
      </div>
    </form>
    </>
  )
}

export default InputBox
import React from 'react'

const Selector = ({Label}) => {

  return (
    <>
    <form className="p-3 m-3" style={{backgroundColor:"white",borderRadius:"10px"}}>
      <div className="mb-3">
      <label htmlFor="inputBox" className="form-label">{Label}</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    </form>
    </>
  )
}

export default Selector


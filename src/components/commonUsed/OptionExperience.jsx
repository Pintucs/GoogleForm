import React from 'react'

const Experience = () => {

  return (
    <>
    <form className="p-3 m-3" style={{backgroundColor:"white",borderRadius:"10px"}}>
      <div className="mb-3">
      <label htmlFor="inputBox" className="form-label">Experience *</label>
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option defaultValue="0">Choose</option>
        <option value="1">Fresher</option>
        <option value="2">1 Year Experience</option>
        <option value="3">2 Year Experience</option>
        <option value="4">3 Year Experience</option>
        <option value="5">5 Year Experience</option>
        <option value="6">10 Year Experience</option>
      </select>
    </div>
    </form>
    </>
  )
}

export default Experience


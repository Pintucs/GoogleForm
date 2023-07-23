import React from 'react'

const NoticePeriod = () => {

  return (
    <>
    <form className="p-3 m-3" style={{backgroundColor:"white",borderRadius:"10px"}}>
      <div className="mb-3">
      <label htmlFor="inputBox" className="form-label">Notice Period *</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose</option>
        <option value="1">Immediately</option>
        <option value="2">15 Days</option>
        <option value="3">1 Month</option>
        <option value="4">2 Month</option>
        <option value="5">3 Month</option>
      </select>
    </div>
    </form>
    </>
  )
}

export default NoticePeriod
import React from 'react'

const Technology = () => {

  return (
    <>
    <form className="p-3 m-3" style={{backgroundColor:"white",borderRadius:"10px"}}>
      <div className="mb-3">
      <label htmlFor="inputBox" className="form-label">Technology *</label>
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option defaultValue="0">Choose</option>
        <option value="1">Artificial Intelligence & Machine Learning</option>
        <option value="2">Angular Programming</option>
        <option value="3">Cloud Computing & Edge Computing</option>
        <option value="4">Blockchain & Cryptocurrency</option>
        <option value="5">Deep Learning</option>
        <option value="6">DevOps</option>
        <option value="7">Edge AI & Computing at the Edge</option>
        <option value="8">Digital Twins</option>
        <option value="9">Natural Language Processing (NLP) & Conversational AI</option>
        <option value="10">Open-source Software & Platforms</option>
        <option value="11">Big Data</option>
      </select>
    </div>
    </form>
    </>
  )
}

export default Technology


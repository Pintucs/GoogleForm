import React from 'react';

const File = ({ name }) => {
  return (
    <>
      <form className="p-3 m-3" style={{ backgroundColor: "white", borderRadius:"10px" }}>
        <div className="mb-3">
          <label htmlFor="fileUpload" className="form-label">{name}</label>
          <br />
          <input type="file" label="Upload File" id="fileUpload" variant="file" />
        </div>
      </form>
    </>
  );
}

export default File;

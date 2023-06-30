import React from 'react';
import "./a.css"

const TopPage = ({ name }) => {
  return (
    <>
    <form className='form'>
    <h1 className='top-page-form'>Welcome to my site</h1>
        <p>
          pintucs9695@gmail.com{" "}
          <span>
            <a href="www.google.com" style={{ textDecoration: "none" }}>
              switch user
            </a>
          </span>
        </p>
        <p>
          The name and photo associated with your Google account will be
          recorded when you upload files and submit this form. Your email is not
          part of your response.
        </p>
        <span style={{ color: "red" }}>* Indicates required question</span>
        </form>
    </>
  );
}

export default TopPage;
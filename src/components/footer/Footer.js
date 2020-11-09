import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="mt-0 pt-0"/>
      <div className="p-2 mt-2">
        {'Copyright © '}
        <span className="py-1 my-1">By Isaquiel Fernandes</span>
        {new Date().getFullYear()}
        {'.'}
      </div>
    </footer>
  )
};

export default Footer;

import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer p-3 mb-1">
      <hr/>
      {'Copyright © '}
      <span className="py-1 my-1">By Isaquiel Fernandes</span>
      {new Date().getFullYear()}
      {'.'}
    </footer>
  )
};

export default Footer;

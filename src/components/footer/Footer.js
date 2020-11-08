import React from 'react'

const Footer = () => {
  return (
    <footer className="p3">
      <hr/>
      {'Copyright © '}
      <span className="p-1 m-1 text-center">By Isaquiel Fernandes</span>
      {new Date().getFullYear()}
      {'.'}
    </footer>
  )
};

export default Footer;

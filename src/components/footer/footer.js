import React, { useState, useEffect, useRef } from "react"
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import "./footer.scss"
const Footer = () => {

return(
    <footer
    style={{
    marginTop: `2rem`,
    }}
    >
    © {new Date().getFullYear()}, Built with
    {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    <ul>
        <li> <a href=""><FaFacebookF/></a></li>
        <li> <a href=""><FaTwitter/></a></li>
        <li> <a href=""><FaGooglePlusG/></a></li>
        <li> <a href=""><FaLinkedinIn/></a></li>
        <li> <a href=""><FaInstagram/></a></li>
    </ul>
    </footer>
)}

export default Footer
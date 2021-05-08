import React, { useState, useEffect, useRef } from "react"
import "./login.scss"
const Login = () => {

return(
<section>
<div className="login-div">
  <div className="logo"></div>
  <div className="title">beautiful Login</div>
  <div className="sub-title">Mirko Torrisi's site</div>
  <div className="fields">
    <div className="username">
      <input type="username" className="user-input" placeholder="username"/>
    </div>
    <div className="password">
      <input type="password" className="pass-input" placeholder="password"/>
    </div>
  </div>
  <button className="signin-button">Login</button>
    <div className="link">
      <a href="#">Forgot password?</a> or 
      <a href="#"> Sign up</a>
    </div>
</div>
</section>
)}

export default Login

import React from 'react';



const LoginForm = (props)=>{

   return (

      <div>
       <h2 className="modal-heading">Login</h2>
        <form  action="">

        <div className="container">
           <label htmlFor="uname"><b>Username</b></label>
           <input type="text" placeholder="Enter Username" id="uname" required/>
           <span className="fa fa-user-circle-o fontawesome_span"></span>

           <label htmlFor="psw"><b>Password</b></label>
           <input type="password" placeholder="Enter Password" id="psw" required/>
           <span className="fa fa-lock fontawesome_span"></span>

           <a className="btn" href="#" onClick={()=>{props.removeModal()}}>{"Let's go"}</a>
           <a className="forgot-password" href="#">Forgot your password?</a>
          </div>

         </form>

      </div>
   );




};


export default LoginForm;

import React from 'react';



const RegisterForm = (props)=>{

   return (

      <div>
       <h2 className="modal-heading">Register</h2>
        <form  action="">

        <div className="container">
           <label htmlFor="uname"><b>Username</b></label>
           <input type="text" placeholder="Enter Username" id="uname" required/>
           <span className="fa fa-user-circle-o fontawesome_span"></span>

           <label htmlFor="email"><b>Email</b></label>
           <input type="email" placeholder="Enter Email" id="email" required/>
           <span className="fa fa-envelope fontawesome_span"></span>

           <label htmlFor="confirm-email"><b>Confirm Email</b></label>
           <input type="email" placeholder="Confirm Email" id="confirm-email" required/>
           <span className="fa fa-envelope fontawesome_span"></span>

           <label htmlFor="psw"><b>Password</b></label>
           <input type="password" placeholder="Enter Password" id="psw" required/>
           <span className="fa fa-lock fontawesome_span"></span>

           <label htmlFor="confirm-psw"><b>Confirm Password</b></label>
           <input type="password" placeholder="Confirm Password" id="confirm-psw" required/>
           <span className="fa fa-lock fontawesome_span"></span>

           <a className="btn" href="#" onClick={()=>{props.removeModal()}}>Register</a>
          </div>

         </form>

      </div>
   );




};


export default RegisterForm;

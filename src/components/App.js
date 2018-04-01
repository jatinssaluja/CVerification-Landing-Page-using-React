import React, { Component } from 'react';
import '../styles/App.css';
import Modal from './Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Backdrop from './Backdrop';
const photo = require('../img/logo-dark.png');

class App extends Component {


  state = {loginModalSelected:false, registerModalSelected:false};

onClickLogin = ()=>{

this.setState(()=>{

 return {loginModalSelected:true};

});


};


onClickRegister = ()=>{

this.setState(()=>{

 return {registerModalSelected:true};

});


};


removeModal = ()=>{

this.setState(()=>{

 return {loginModalSelected:false, registerModalSelected:false};

});


};



  render() {



    return (


          <header>
            {(this.state.loginModalSelected || this.state.registerModalSelected)&& <Backdrop removeModal = {this.removeModal}/>}

                <nav>
                 <div className="logo">
                     <img src={photo} alt="CVerification Logo"/>
                    </div>
                <ul className="flex-nav">
                 <li><a href="#" onClick = {this.onClickLogin}>Login</a></li>
                 <li><a href="#" onClick = {this.onClickRegister}>Register</a></li>
                 <li><a href="#">Dashboard</a></li>
                </ul>

                  </nav>
            <div className="hero-content-box">
              </div>
             { this.state.loginModalSelected &&
               <Modal>
                <LoginForm removeModal={this.removeModal}/>
              </Modal>
            }

            { this.state.registerModalSelected &&
              <Modal>
               <RegisterForm removeModal={this.removeModal}/>
             </Modal>
           }

           </header>


    );
  }
}

export default App;

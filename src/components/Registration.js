import React, { useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { register_user_service } from '../services/api/user_management_service'
import GenericLoadingComponent from './GenericLoadingComponent'

const Registration = (props) => {
  const {set_user_id} = props;
    const navigate = useNavigate()
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("")
    const [showloadingDialog, setShowloadingDialog] = useState(false);

    const on_register_user_btn_clicked = async() =>{
        if (email.length < 1 || password.length < 1) {
            alert("All fields are needed");
            return;
          }  
          let registerObject = {
            email: email,
            password: password,
          };
          setShowloadingDialog(true)
          let res = await register_user_service(registerObject);
          if(res.success){
            sessionStorage.setItem('token', res.message?.message?.token);
            set_user_id(res.message?.message?.business_user_id);
            setShowloadingDialog(false)
            window.location.reload();
        }
        else{
          setShowloadingDialog(false)
          alert("User alreayd exist try logging in")
      }
    }
  return (
    <>
    <div className="h-full-view">
        <Header />
        <div class="registration">
            <img class="logo" src={require("../assets/icons/Shield Check.png")} alt="" />
            <h1>Register a new account</h1>
            <p>Already have an account? <a href="/login" onClick={() => {
          navigate("/login")
        }}>Log in</a></p>
            <span>
                <input type="text" placeholder="Email Address" onChange={(e) => setemail(e.target.value)}/>
            </span>
            <span>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </span>
            <button type="submit" className='yellow_button mt-3' onClick={() => on_register_user_btn_clicked()}>Sign Up</button>
        </div>
    </div>
    {showloadingDialog &&
      <GenericLoadingComponent
        loadingmessage={"Regitsering "}
        showloadingDialog={showloadingDialog}
      /> }
    </>
  )
}

export default Registration
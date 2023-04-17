import React from 'react';
import './Security.css'
import Header1 from '../components/Header1'

const Security = () => {
  return (
    <div>
       <Header1 />
        <div class="account-div2">        
                <div class="acc1 d-flex align-items-center justify-content-center" ><p>Show Seed</p>
                </div>          
                <div class="acc"><a class="secure" href=".#"><p>Access <br /> Static <br />Channel <br />Backups</p></a></div>
                <div class="acc "><a class="secure" href=".#"><p>Reset node <br /> Password</p> </a></div> 
                 
        </div>
    </div>
  )
}

export default Security
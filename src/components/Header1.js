import React from 'react'
import './Header1.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Header1 = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <header className="head header1">
            <div>
                <img src={require("../assets/logo.png")} alt="" />
            </div>
            <div className="links" >
                <ul>
                    <li>
                        <a className={location.pathname == "/dashboard" ? "mission" : ""} href="#" onClick={(e) => {
                            e.preventDefault()
                            navigate("/dashboard")
                        }}>Mission Control</a>
                    </li>
                    <li>
                        <a className={location.pathname == "/policy" ? "mission" : ""} href="#" onClick={(e) => {
                            e.preventDefault()
                            navigate("/policy")
                        }}>Policy</a>
                    </li>
                    <li>
                        <a className={location.pathname == "/accounting" ? "mission" : ""} href="#" onClick={(e) => {
                            e.preventDefault()
                            navigate("/accounting")
                        }}>Accounting</a>
                    </li>
                    <li>
                        <a className={location.pathname == "/security" ? "mission" : ""} href="#" onClick={(e) => {
                            e.preventDefault()
                            navigate("/security")
                        }}>Security</a>
                    </li>
                    <li>
                        <a className={location.pathname == "/connect" ? "mission" : ""} href="#" onClick={(e) => {
                            e.preventDefault()
                            navigate("/connect")
                        }}>Connect</a>
                    </li>
                </ul>
            </div>
            <div >
                <ul>
                    <li>
                        <a className="sign-out" href="#" onClick={(e) => {
                            e.preventDefault()
                            sessionStorage.removeItem('token')
                            window.location.reload();
                        }}>Sign Out</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header1
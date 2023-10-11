import React, { useState } from 'react'
import "./profile.css"
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"

const Profile = () => {
    const name = localStorage.getItem("name")
    const [show, setShow] = useState(localStorage.getItem('loggedIn'))

    console.log(show);

    const handleLogout = ()=>{
        localStorage.clear();
        setShow(!show);
        toast.info("Logout Successfully", 
        {position: toast.POSITION.TOP_RIGHT})
    }

    const RenderProfile = ()=>{
        if(show){
            return(
                <div className='user-profile'>
                    <ul>
                        <li>Hi {name}</li>
                        <li><Link to='/login' className='lgbtn' onClick={handleLogout}>Logout</Link> </li>
                    </ul>
                </div>
            )
        }else{
            return(
                <div className="user-profile">
                    <ul>
                        <li><Link to="/register" className='register' >Register</Link></li>
                        <li><Link to="/login" className='login' >Login</Link></li>
                    </ul>
                </div>
            )
        }
    }

  return (
    <>
      <RenderProfile />
    </>
  )
}

export default Profile

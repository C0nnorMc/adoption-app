import React from "react";
import "./Header.css";
import {CgProfile} from "react-icons/cg";
import {AiOutlineMessage} from "react-icons/ai";
import {MdPets} from "react-icons/md";
import { useAuth } from "./firebase";


const Header =() => {
    const currentUser = useAuth();
    return (
        <div className="header">
            <a href=""><CgProfile className="header-icon" size={"30px"}/></a>
            <a href=""><MdPets className="header-icon" size={"40px"}/></a>
            <a href=""><AiOutlineMessage className="header-icon" size={"30px"}/></a>
            <div>Current user is {currentUser?.email}</div>       
        </div>
    )
}

export default Header
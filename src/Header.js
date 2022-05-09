import React from "react";
import "./Header.css";
import {CgProfile} from "react-icons/cg";
import {AiOutlineMessage} from "react-icons/ai";
import {MdPets} from "react-icons/md";

const Header =() => {
    return (
        <div className="header">
            <a href=""><CgProfile className="header-icon" size={"30px"}/></a>
            <a href=""><MdPets className="header-icon" size={"40px"}/></a>
            <a href=""><AiOutlineMessage className="header-icon" size={"30px"}/></a>        
        </div>
    )
}

export default Header
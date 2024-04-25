import React from "react"
import logo from "../../images/logo.svg";
import bell from "../../images/bell.svg";
import profileCard from "../../images/profile-card.svg";
import broadcast from "../../images/broadcast.svg";
import avatar from "../../images/Avatar.svg";
import "./topnav.css";

function TopNav() {
    return (<React.Fragment>
        <div className="d-flex px-4 py-1  w-100 justify-content-between  align-items-center ">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className="d-flex justify-content-between">
                <div className="topnav-right-icons mx-1">
                    <img src={broadcast} alt=""></img>
                </div>
                <div className="topnav-right-icons mx-1">
                    <img src={bell} alt=""></img>
                </div>
                <div className="topnav-right-icons mx-1">
                    <img src={profileCard} alt=""></img>
                </div>
                <img className="avatar" src={avatar} alt=""></img>
            </div>
        </div>
    </React.Fragment>)
}

export default TopNav;
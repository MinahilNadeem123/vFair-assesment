import React from 'react'
import "./sidenav.css"
import { MainChatContainer } from '../chat/MainChatContainer'
import logo from "../../images/logo.svg";
import chat from "../../images/chaticon.svg";
import people from "../../images/peopleicon.svg";
import room from "../../images/roomsicon.svg";

const SideNav = () => {
    return (
        <div>
            <div class="l-navbar" id="nav-bar">
                <nav class="nav">
                    <div>
                        <div class="nav_list ">
                            <a href="#" class="nav_link active"> <i class='bx bx-grid-alt nav_icon'></i> <span class="nav_name"><img src={chat} alt=""/></span> </a>
                            <a href="#" class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name"><img src={people} alt=""/></span> </a>
                            <a href="#" class="nav_link"> <i class='bx bx-message-square-detail nav_icon'></i> <span class="nav_name"><img src={room} alt=""/></span> </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="height-100 bg-light">
                <MainChatContainer />
            </div>
        </div>
    )
}

export default SideNav
import React from "react";
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarMenu,
    SideBarContent,
} from "./styles";

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SideBarMenu>
                <SideBarContent>
                    <h2 style={{ color: "white" }}>SideBar</h2>
                </SideBarContent>
            </SideBarMenu>
        </SideBarContainer>
    );
};

export default SideBar;

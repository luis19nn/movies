import React from "react";
import { BsFillSuitHeartFill as FavIcon } from "react-icons/bs";
import { HiShoppingCart as CartIcon } from "react-icons/hi";
import {
    Nav,
    NavLink,
    NavDiv as NavSearch,
    SearchBar,
    SearchIcon,
    NavDiv as NavMenu,
} from "./styles";

const NavigationBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h2>LOGO</h2>
                </NavLink>

                <NavSearch>
                    <SearchBar />
                    <SearchIcon />
                </NavSearch>

                <NavMenu>
                    <FavIcon onClick={toggle} />
                    <CartIcon onClick={toggle} />
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavigationBar;

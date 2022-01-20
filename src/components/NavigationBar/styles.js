import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

/*
 *** NAVBAR PARENT ***
 */

export const Nav = styled.nav`
    background: linear-gradient(45deg, var(--color-one), var(--color-two));
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    z-index: 10;
`;

/*
 *** LOGO  ***
 */

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

/*
 *** DIV DEFAULT FOR SEARCH AND FAV/CART MENU ***
 */

export const NavDiv = styled.div`
    display: flex;
    align-items: center;

    & > * {
        color: #fff;
        height: 30px;
        width: 30px;
        margin-right: 20px;
        cursor: pointer;
    }
`;

/*
 *** SEARCH BAR ELEMENTS ***
 */

export const SearchBar = styled.input.attrs({
    type: "search",
    placeholder: "Pesquisa",
})`
    &&& {
        color: #000;
        background-color: #fff;
        border: 0;
        border-radius: 2px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        font-size: 0.9rem;
        padding: 15px;
        width: 300px;
        margin-right: 0;
        cursor: text;

        &:focus {
            outline: none;
        }

        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`;

export const SearchIcon = styled(AiOutlineSearch)`
    color: #000;
    margin-right: 0;
    background-color: #fff;

    @media screen and (max-width: 768px) {
        color: #fff;
        background-color: transparent;
    }
`;

import styled from "styled-components";
import { Element } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

export const SideBarContainer = styled.aside`
    background: linear-gradient(90deg, var(--color-three), var(--color-two));
    position: fixed;
    z-index: 1000;
    width: 400px;
    height: 100%;
    display: grid;
    align-items: center;
    top: 50px;
    right: 0;
    transition: 0.3s ease-in-out;

    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

    @media screen and (max-width: 768px) {
        background: linear-gradient(45deg, var(--color-one), var(--color-two));
        top: 0;
        left: 0;
        width: 100%;

        opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
        top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(AiOutlineClose)`
    color: #fff;
`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(2, 60px);
    }
`;

export const SideBarContent = styled(Element)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
`;

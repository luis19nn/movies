import styled from "styled-components";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

/*
 *** CONTAINER ***
 */

export const Container = styled.div`
    height: 350px;
    width: 225px;
    border-radius: 0 0 3px 3px;
    color: #fff;

    &:hover {
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
    }
`;

/*
 *** HEADER ***
 */

export const Header = styled.div`
    display: flex;
    justify-content: center;

    height: 220px;
    background-color: #333333;
`;

export const FavIcon = styled(BsFillSuitHeartFill)`
    position: absolute;

    margin-top: 5px;
    margin-right: -90px;
    margin-left: 90px;

    font-size: 1.5rem;
    color: var(--color-one);
    cursor: pointer;

    &:hover {
        color: var(--color-two);
        transition: 0.3s ease-in-out;
    }
`;

export const Image = styled.div`
    & > img {
        height: auto;
        width: 100%;
    }
`;

export const Date = styled.p`
    position: absolute;

    align-self: end;
    margin-bottom: 5px;

    opacity: 4.5;
    font-weight: bold;
    text-shadow: 2px 2px var(--color-one);

    z-index: 10;
`;

/*
 *** CONTENT ***
 */

export const Content = styled.div`
    position: absolute;

    display: flex;
    height: 100px;
    width: 225px;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #333333;
    box-shadow: 0 0 50px #121212;
    z-index: 1;
`;

export const Name = styled.h4`
    text-align: center;
`;

export const Middle = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Stars = styled.div`
    font-weight: bold;
`;

export const StarIcon = styled(AiFillStar)`
    color: var(--color-two);
`;

export const Genre = styled.p`
    font-style: italic;
    font-size: 0.8rem;
    margin-left: 7px;
`;

export const Price = styled.p`
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 5px;
`;

/*
 *** BUTTON ***
 */

export const Button = styled.button`
    position: absolute;

    height: 30px;
    width: 225px;
    margin-top: 100px;

    color: #fff;
    background-color: var(--color-one);
    border: 0;
    border-radius: 0 0 3px 3px;
    z-index: 10;
    cursor: pointer;

    &:hover {
        background-color: var(--color-two);
        transition: 0.3s ease-in-out;
    }
`;

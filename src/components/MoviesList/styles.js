import styled from "styled-components";

export const RenderedList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 15px;

    margin: 0 auto;
    justify-items: center;
    align-items: center;

    margin-top: 30px;
    margin-bottom: 30px;
    padding: 20px;
    max-width: 1000px;
`;

export const Sentinel = styled.div`
    position: relative;
    top: 50%;
    left: 150%;
`;

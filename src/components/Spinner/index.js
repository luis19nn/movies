import React from "react";
import spinner from "../../img/Spinner.svg";
import { SpinnerContainer, SpinnerLoader } from "./styles";

const Spinner = () => {
    return (
        <>
            <SpinnerContainer>
                <SpinnerLoader>
                    <img src={spinner} alt="Loading..." />
                </SpinnerLoader>
            </SpinnerContainer>
        </>
    );
};

export default Spinner;

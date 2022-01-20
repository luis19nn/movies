import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Router>
                <Home />

                <GlobalStyles />
            </Router>
        </>
    );
}

export default App;

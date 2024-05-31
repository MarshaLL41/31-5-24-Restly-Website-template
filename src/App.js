import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Data from "./Pages/Data";
import Cyber from "./Pages/Cyber";
import Market from "./Pages/Market";
import Software from "./Pages/Software";
import Cloud from "./Pages/Cloud";

export class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/data" element={<Data></Data>}></Route>
                    <Route path="/cyber" element={<Cyber></Cyber>}></Route>
                    <Route path="/market" element={<Market></Market>}></Route>
                    <Route path="/software" element={<Software></Software>}></Route>
                    <Route path="/cloud" element={<Cloud></Cloud>}></Route>
                </Routes>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;

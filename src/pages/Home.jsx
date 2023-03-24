/* eslint-disable import/no-unresolved */
import React from "react";
import Header from "../components/Header";
import { Routes, Route, Link } from "react-router-dom";
import NFLComponent from "./NFLFolder/NFLData";
import Soccer from "./Soccer/Soccer";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="my-4">
                    <ul className="d-flex justify-content-between align-items-center list-unstyled">
                        <li>
                            <Link to="/dashboard/nfl">NFL</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/soccer">Soccer</Link>
                        </li>
                        <li>MLB</li>
                        <li>NBA</li>
                        <li>NCAAB</li>
                        <li>NCAAF</li>
                        <li>NHL</li>
                    </ul>
                </div>

                <Routes>
                    <Route path="/dashboard" element={<NFLComponent />} />
                    <Route path="/dashboard/nfl" element={<NFLComponent />} />
                    <Route path="/dashboard/soccer" element={<Soccer />} />
                </Routes>
            </div>
        </div>
    );
};

export default Home;

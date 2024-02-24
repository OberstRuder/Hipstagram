import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import UserPage from "../pages/UserPage";

const Routing = ({isLogged}) => {

    return(
        <>
        {
            isLogged ?
            <div>
                <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/:id" element={<UserPage />} />
                </Routes>
            </div>
            :
            <div>
                <Routes>
                        <Route path="/" element={<MainPage />} />
                </Routes>
            </div>
        }
        </>
    )
};

export const CRouting = connect((state) => ({
    isLogged: state?.auth?.token
}), null)(Routing);
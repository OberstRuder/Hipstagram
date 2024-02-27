import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { CLoginPage } from "../pages/LoginPage";
import { CRegistrationPage } from "../pages/RegistrationPage";
import { NotFound } from "../pages/NotFound";
import { CProfile } from "../pages/ProfilePage";

const Routing = ({ isLogged }) => {

    return (
        <>
            {
                isLogged ?
                    <div className="main-cont">
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/profile/:_id" element={<CProfile />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    :
                    <div className="main-cont">
                        <Routes>
                            <Route path="/" element={<CLoginPage />} />
                            <Route path="/login" element={<CLoginPage />} />
                            <Route path="/register" element={<CRegistrationPage />} />
                        </Routes>
                    </div>
            }
        </>
    )
};

export const CRouting = connect((state) => ({
    isLogged: state?.auth?.token
}), null)(Routing);
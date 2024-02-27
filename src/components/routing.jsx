import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { CLoginPage } from "../pages/LoginPage";
import { CRegistrationPage } from "../pages/RegistrationPage";
import { NotFound } from "../pages/NotFound";
import { CProfile } from "../pages/ProfilePage";
import { CSearch } from "../pages/SearchPage";
import { CSettings } from "../pages/SettingsPage"
import { CFollowings } from "../pages/FollowingsPage";
import { CFollowers } from "../pages/FolllowersPage";

const Routing = ({ isLogged }) => {

    return (
        <>
            {
                isLogged ?
                    <div className="main-cont">
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/profile/:_id" element={<CProfile />} />
                            <Route path="/search" element={<CSearch/>}/>
                            <Route path='/settings' element={<CSettings/>}/>
                            <Route path="/following/:_id" element={<CFollowings/>} />
                            <Route path="/followers/:_id" element={<CFollowers/>} />
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
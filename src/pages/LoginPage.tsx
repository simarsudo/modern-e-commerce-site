import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import LoginSection from "../sections/LoginSection";
import SignupSection from "../sections/SignupComponent";
import ForgotPasswordSection from "../sections/ForgotPasswordSection";
import SVGBackground from "../components/SVGBackground";
import { useAppSelector } from "../store/hooks";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
    const [currentComponent, setCurrentComponent] = useState("login");
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = useAppSelector(
        (state) => state.user.isAuthenticated
    );

    useEffect(() => {
        if (isAuthenticated) {
            if (location.key !== "default") {
                navigate(-1);
            } else {
                navigate("/");
            }
        }
    }, [isAuthenticated]);

    let Component = (
        <LoginSection
            key="loginComponent"
            setCurrentComponent={setCurrentComponent}
        />
    );

    if (currentComponent === "signup") {
        Component = (
            <SignupSection
                key="signupComponent"
                setCurrentComponent={setCurrentComponent}
            />
        );
    } else if (currentComponent === "forgot") {
        Component = (
            <ForgotPasswordSection
                key="forgot"
                setCurrentComponent={setCurrentComponent}
            />
        );
    }

    return (
        <PageTransitionWrapper className="content-wrapper relative flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
                {Component}
            </AnimatePresence>
            <SVGBackground />
        </PageTransitionWrapper>
    );
};

export default LoginPage;

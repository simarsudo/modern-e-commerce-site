import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import LoginSection from "../sections/LoginSection";
import SignupSection from "../sections/SignupComponent";
import ForgotPasswordSection from "../sections/ForgotPasswordSection";
import SVGBackground from "../components/SVGBackground";
import Shirt from "../svgImages/Shirt";
import Pant from "../svgImages/Pant";
import Shoe from "../svgImages/Shoe";

const LoginPage = () => {
	const [currentComponent, setCurrentComponent] = useState("login");

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
		<PageTransitionWrapper className="content-wrapper relative flex items-center justify-center">
			<AnimatePresence mode="wait" initial={false}>
				{Component}
			</AnimatePresence>
			<SVGBackground />
		</PageTransitionWrapper>
	);
};

export default LoginPage;

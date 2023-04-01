import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";
import ForgotPasswordComponent from "../components/ForgotPasswordComponent";

const LoginPage = () => {
	const [currentComponent, setCurrentComponent] = useState("login");

	let Component = (
		<LoginComponent
			key="loginComponent"
			setCurrentComponent={setCurrentComponent}
		/>
	);

	if (currentComponent === "signup") {
		Component = (
			<SignupComponent
				key="signupComponent"
				setCurrentComponent={setCurrentComponent}
			/>
		);
	} else if (currentComponent === "forgot") {
		Component = (
			<ForgotPasswordComponent
				key="forgot"
				setCurrentComponent={setCurrentComponent}
			/>
		);
	}

	return (
		<PageTransitionWrapper className="content-wrapper flex items-center justify-center">
			<AnimatePresence mode="wait" initial={false}>
				{Component}
			</AnimatePresence>
		</PageTransitionWrapper>
	);
};

export default LoginPage;

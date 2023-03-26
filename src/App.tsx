import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GlobalLoader from "./GlobalLoader";
import LandingPage from "./pages/LandingPage";

function App() {
	const [isMobileFilterOn, setMobileFilters] = useState(false);
	const location = useLocation();
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			console.log("bruh");
		}, 4000);
	}, []);

	return (
		<AnimatePresence mode="wait">
			<div className="relative flex flex-col gap-4  bg-bg-light">
				<Navbar
					isMobileFilterOn={isMobileFilterOn}
					setMobileFilters={setMobileFilters}
				/>
				<Routes location={location} key={location.pathname}>
					<Route index element={<LandingPage />} />
					<Route
						path="/products"
						element={<MainPage isMobileFilterOn={isMobileFilterOn} />}
					/>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="gl" element={<GlobalLoader />} />
				</Routes>
				<AnimatePresence>
					{visible && <GlobalLoader key="LoadingScreen" />}
				</AnimatePresence>
			</div>
		</AnimatePresence>
	);
}

export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
	const [isMobileFilterOn, setMobileFilters] = useState(false);
	return (
		<div className="relative flex flex-col gap-4 bg-bg-light">
			<Navbar
				isMobileFilterOn={isMobileFilterOn}
				setMobileFilters={setMobileFilters}
			/>
			<Routes>
				<Route
					index
					element={<MainPage isMobileFilterOn={isMobileFilterOn} />}
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

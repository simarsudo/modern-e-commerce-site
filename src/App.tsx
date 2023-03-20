import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
	return (
		<div className="relative flex flex-col gap-4 bg-bg-light">
			<Navbar />
			<Routes>
				<Route index element={<MainPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

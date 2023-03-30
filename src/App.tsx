import React, { ReactElement, useEffect, useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GlobalLoader from "./GlobalLoader";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import PageLoader from "./PageLoader";
import Products from "./pages/Products";

function App() {
	const [isMobileFilterOn, setMobileFilters] = useState(false);
	const [pageTransition, isPageTransition] = useState(false);
	const location = useLocation();
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			console.log("bruh");
		}, 4000);
	}, []);

	const element: any = useRoutes([
		{ path: "/", element: <LandingPage /> },
		{
			path: "/products",
			element: <MainPage isMobileFilterOn={isMobileFilterOn} />,
		},
		{ path: "/login", element: <LoginPage /> },
		{ path: "/signup", element: <SignupPage /> },
		{ path: "/shirts", element: <Products /> },
		{ path: "/pants", element: <Products /> },
		{ path: "/shoes", element: <Products /> },
		{ path: "*", element: <PageNotFound /> },
	]);

	return (
		<>
			<Navbar
				isMobileFilterOn={isMobileFilterOn}
				setMobileFilters={setMobileFilters}
			/>
			<AnimatePresence mode="sync">
				{React.cloneElement(element, { key: location.pathname })}
				{pageTransition && <PageLoader />}
				{visible && <GlobalLoader key="LoadingScreen" />}
			</AnimatePresence>
		</>
	);
}

export default App;

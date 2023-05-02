import React, { ReactElement, useEffect, useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { authenticateUser, deAuthenticateUser } from "./store/UserSlice";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GlobalLoader from "./GlobalLoader";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import PageLoader from "./PageLoader";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
    const [isMobileFilterOn, setMobileFilters] = useState(false);
    const [pageTransition, setPageTransition] = useState(false);
    const [locationCount, setLocationCount] = useState(0);
    const [firstLoad, setFirstLoad] = useState(true);
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const auth = getAuth();
    const currentUser = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!firstLoad) {
            setPageTransition(true);
            setLocationCount((prevValue) => {
                return prevValue + 1;
            });
            // console.log("location Changed");
        }
    }, [location]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setFirstLoad(false);
        }, 4000);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPageTransition(false);
        }, 1000);
    }, [locationCount]);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(
                authenticateUser({
                    displayName: user.displayName!,
                    email: user.email!,
                    uid: user.uid,
                })
            );
        } else {
            dispatch(deAuthenticateUser());
        }
    });

    const element: any = useRoutes([
        { path: "/", element: <LandingPage /> },
        {
            path: "/products",
            element: <ProductsPage isMobileFilterOn={isMobileFilterOn} />,
        },
        { path: "/login", element: <LoginPage /> },
        { path: "/signup", element: <SignupPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/wishlist", element: <WishlistPage /> },
        { path: "/shirts", element: <Products /> },
        { path: "/jeans", element: <Products /> },
        { path: "/shoes", element: <Products /> },
        { path: "/shirts/:id", element: <ProductPage /> },
        { path: "/jeans/:id", element: <ProductPage /> },
        { path: "/shoes/:id", element: <ProductPage /> },
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

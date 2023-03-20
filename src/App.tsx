import React from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Products from "./wrappers/Products";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="relative flex flex-col gap-4 bg-bg-light">
			<Navbar />
			<div className="content-wrapper flex h-full flex-col gap-4 text-rose-400 md:flex-row md:p-2 2xl:p-4">
				<Filters />
				<Products />
			</div>
			<Footer />
		</div>
	);
}

export default App;

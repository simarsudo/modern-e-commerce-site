import React, { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";
import PageTransitionWrapper from "../wrappers/PageTransitionWrapper";
import { pageVariants } from "../variants/pageVariants";
import ShoesSection from "../sections/ShoesSection";
import ShirtsSection from "../sections/ShirtsSection";
import JeansSection from "../sections/JeansSection";
import Loader from "../components/Loader";
import ImageCarousel from "../components/ImageCarousel";

type Props = {};

const LandingPage = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const [shoesLoading, setShoesLoading] = useState(false);
    const [shirtsLoading, setShirtsLoading] = useState(false);
    const [jeansLoading, setJeansLoading] = useState(false);

    useEffect(() => {
        if (!shirtsLoading && !shoesLoading && !jeansLoading) {
            console.log("bruh");
            setLoading(false);
        }
    }, [shoesLoading, shirtsLoading, jeansLoading]);

    return (
        <PageTransitionWrapper className="content-wrapper relative flex h-full flex-col gap-4 overflow-hidden">
            {loading ? (
                <Loader />
            ) : (
                <div className="flex flex-col gap-2 divide-y-2 p-6 md:p-8 md:py-2">
                    <ImageCarousel />
                    <ShoesSection setShoesLoading={setShoesLoading} />
                    <ShirtsSection setShirtsLoading={setShirtsLoading} />
                    <JeansSection setJeansLoading={setJeansLoading} />
                </div>
            )}
        </PageTransitionWrapper>
    );
};

export default LandingPage;

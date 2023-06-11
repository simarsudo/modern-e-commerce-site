import { collection, doc, getDoc, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { fireDB } from "../Firebase";

type Props = {};

type images = {
    images: string[];
};

const ImageCarousel = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const [Error, setError] = useState(false);
    const [images, setImages] = useState<images>();

    useEffect(() => {
        async function getData() {
            const docRef = doc(fireDB, "extra", "vq2MX2LxpmIAXAr2rf8k");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let data = docSnap.data();
                setImages(data as images);
            } else {
                console.log("No such document!");
            }
            return;
        }

        if (!firstLoad) {
            try {
                getData();
            } catch (e) {
                console.log(e);
                setError(true);
            }
            setFirstLoad(true);
        }
    });

    return (
        <div className="my-1 flex min-h-full">
            <swiper-container navigation={true} pagination={true}>
                {images?.images.map((imgLink, key) => {
                    console.log(images, "brrrr");
                    return (
                        <swiper-slide className="flex min-h-full items-center justify-center">
                            <img
                                key={key}
                                src={imgLink}
                                alt="product image"
                                className="m-auto h-full lg:h-96 lg:w-auto"
                            />
                        </swiper-slide>
                    );
                })}
            </swiper-container>
        </div>
    );
};

export default ImageCarousel;

import React, { useState } from "react";
import { register } from "swiper/element/bundle";
import { SwiperContainer, SwiperSlide } from "swiper/element/bundle";
import { SwiperProps, SwiperSlideProps } from "swiper/react";

register();

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "swiper-container": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & SwiperProps,
                HTMLElement
            >;
            "swiper-slide": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
                HTMLElement
            >;
        }
    }
}

interface Container extends SwiperContainer {}

type Props = {
    imgs: string[];
};

const ImagesComponent = (props: Props) => {
    return (
        <div className="flex min-h-full">
            <swiper-container navigation={true} pagination={true}>
                {props.imgs.map((imgLink, key) => {
                    return (
                        <swiper-slide className="flex items-center justify-center">
                            <img
                                key={key}
                                src={imgLink}
                                alt="product image"
                                className="mx-auto h-[50vh] w-auto md:h-[80vh]"
                            />
                        </swiper-slide>
                    );
                })}
            </swiper-container>
        </div>
    );
};

export default ImagesComponent;

import React, { useEffect, useRef } from "react";

type Props = {
    type: string | undefined;
    size: string | number;
    setSize: React.Dispatch<React.SetStateAction<string | number>>;
};

const ShoeSize = (props: Props) => {
    const shoeSelectRef = useRef<HTMLSelectElement>(null);
    const otherProductsSelectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        if (props.type === "shoes") {
            props.setSize(6);
        } else {
            props.setSize("XS");
        }
    }, []);

    function onSizeChange(
        e: React.ChangeEvent<HTMLSelectElement>,
        event: "shoe" | "other"
    ) {
        if (event === "shoe") {
            const value = parseInt(e.target.value);
            props.setSize(value);
            return;
        }
        props.setSize(e.target.value);
    }

    return props.type === "shoes" ? (
        <div className="flex flex-col gap-4">
            <select
                name="size"
                id="size"
                ref={shoeSelectRef}
                onChange={(e) => onSizeChange(e, "shoe")}
                className="mr-1 h-10 w-min bg-white shadow-none hover:cursor-pointer focus:border-bg-dark focus:shadow-none"
            >
                <option value="6">Size: 6</option>
                <option value="7">Size: 7</option>
                <option value="8">Size: 8</option>
                <option value="9">Size: 9</option>
                <option value="10">Size: 10</option>
            </select>
        </div>
    ) : (
        <div className="flex flex-col gap-4">
            <select
                name="size"
                id="size"
                ref={otherProductsSelectRef}
                onChange={(e) => onSizeChange(e, "other")}
                className="mr-1 h-10 w-min bg-white shadow-none hover:cursor-pointer focus:border-bg-dark focus:shadow-none"
            >
                <option value="XS">Size: XS</option>
                <option value="S">Size: S</option>
                <option value="M">Size: M</option>
                <option value="L">Size: L</option>
                <option value="Xl">Size: Xl</option>
            </select>
        </div>
    );
};

export default ShoeSize;

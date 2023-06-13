import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addToTotalPrice } from "../store/cartSlice";

type Props = {
    name: string;
    className: string | undefined;
    options: { label: string; value: string | number }[];
    defaultValue: string | number;
    itemId: string;
    itemPrice: number;
};

const SelectComponent = React.forwardRef(
    (props: Props, ref: React.ForwardedRef<HTMLSelectElement>) => {
        const { name, className, options, defaultValue } = props;
        const [quantity, setQuantity] = useState(1);
        const dispatch = useAppDispatch();
        const sizeString = String(defaultValue);

        const selectOptions = options.map((opt) => {
            return (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            );
        });

        return (
            <select
                name={name}
                id={name}
                ref={ref}
                className={className}
                value={quantity}
                onChange={(e) => {
                    const temp = parseInt(e.target.value);
                    dispatch(
                        addToTotalPrice([props.itemId, props.itemPrice * temp])
                    );
                    setQuantity(temp);
                }}
            >
                {selectOptions}
            </select>
        );
    }
);

export default SelectComponent;

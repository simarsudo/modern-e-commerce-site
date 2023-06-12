import * as React from "react";

type Props = {
    name: string;
    className: string | undefined;
    options: { label: string; value: string | number }[];
    defaultValue: string | number;
};

const SelectComponent = React.forwardRef(
    (props: Props, ref: React.ForwardedRef<HTMLSelectElement>) => {
        const { name, className, options, defaultValue } = props;

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
                defaultValue={sizeString}
            >
                {selectOptions}
            </select>
        );
    }
);

export default SelectComponent;

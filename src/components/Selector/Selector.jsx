import React from "react";
import './Selector.scss';
import '/src/components/Input/Input.scss';
import { TextField, MenuItem } from "@mui/material";

const Selector = ({ options, input, placeholder }) => {
    return (
        <div className="inputBlock">
            <TextField
                className="selector"
                select
                value={input.value}
                onBlur={input.onBlur}
                onChange={input.onChange}
                variant="outlined"
                placeholder={placeholder}
            >
                <MenuItem value="" disabled>
                    {placeholder}
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <div className="inputBlock__errors">
                {input.isDirty
                    ? Object.values(input.errors)
                        .filter((err) => err)
                        .map((err, index) =>
                                <p className="inputBlock__error" key={index}>
                                    {err}
                                </p>
                            )
                    : null}
            </div>
        </div>
    );
};

export default Selector;

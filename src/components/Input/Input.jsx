import './Input.scss';
import { useState } from "react";
import CloseEye from "../../assets/icons/Auth/CloseEye.jsx";
import OpenEye from "../../assets/icons/Auth/OpenEye.jsx";

const Input = ({ children, ...props}) => {
    const {
        type,
        name,
        input
    } = props;
    const [showPass, setShowPass] = useState(false);
    return (
        <div className="inputBlock">
            <input
                value={input.value}
                onChange={(e) => input.onChange(e)}
                onBlur={() => input.onBlur()}
                type={
                    type === "password"
                        ? showPass
                            ? "text"
                            : "password"
                        : type
                }
                className={
                    Object.values(input.errors).filter((err) => err).length &&
                    input.isDirty
                        ? `input input_error`
                        : 'input'
                }
                name={name}
                id={name}
                placeholder={children}
            />
            {type === "password" ? (
                showPass ?
                    <button
                        onClick={() => setShowPass(!showPass)}
                        type="button"
                        className="eye"
                    >
                        <OpenEye />
                    </button>
                 :
                    <button
                        onClick={() => setShowPass(!showPass)}
                        type="button"
                        className="eye"
                    >
                        <CloseEye />
                    </button>
            ) : null}
            <div className="inputBlock__errors">
                {input.isDirty
                    ? Object.values(input.errors)
                        .filter((err) => err)
                        .map((err, index) => {
                            return (
                                <p className="inputBlock__error" key={index}>
                                    {err}
                                </p>
                            );
                        })
                    : null}
            </div>
        </div>
    );
}
export default Input;
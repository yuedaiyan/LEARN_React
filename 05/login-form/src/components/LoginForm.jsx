import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
    const [showPassword, setPassword] = useState(false);

    function switchPassword() {
        setPassword(!showPassword);
    }

    return (
        <>
            <p className="pBasic">Hello, welcome to my website</p>
            <div>
                <input
                    className="inputBasic"
                    placeholder="Email"
                />
            </div>
            <div>
                <input
                    className="inputBasic"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                />

                <button
                    className="buttonBasic"
                    onClick={switchPassword}>
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
            <button className="buttonBasic">Login</button>
            <button className="buttonBasic">Sign up</button>
        </>
    );
}
export default LoginForm;

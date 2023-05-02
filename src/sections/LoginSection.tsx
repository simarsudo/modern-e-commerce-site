import React, { useRef, useState } from "react";
import ComponentWrapper from "../wrappers/ComponentWrapper";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

type Props = {
    setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
};

const LoginSection = (props: Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const auth = getAuth();
    const [loading, setLoading] = useState(false);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        setLoading(true);
        signInWithEmailAndPassword(auth, email!, password!)
            .then((userCredentials) => {
                const currentUser = userCredentials;
                console.log(currentUser);
            })
            .catch((error) => {
                const errorMessage: string = error.message;
                console.log(
                    errorMessage
                        .replaceAll("-", " ")
                        .replace("auth/", "")
                        .replace("Firebase: Error ", "")
                        .replace("(", "")
                        .replace(")", "")
                        .toUpperCase()
                );
            })
            .finally(() => setLoading(false));
    };

    return (
        <ComponentWrapper className="z-10 mt-4 flex aspect-[1/1.4] w-[90%] origin-top flex-col justify-evenly overflow-hidden rounded bg-bg-dark p-8 text-white md:max-w-[30%]">
            <h2 className="border-b text-center font-highlight text-5xl font-bold md:text-6xl">
                Log In
            </h2>
            <form
                className="flex flex-col gap-4 font-semibold text-gray-700"
                onSubmit={submitHandler}
            >
                <div className="flex flex-col gap-2">
                    <span className="text-white">Email</span>
                    <input type="email" ref={emailRef} required />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-white">Password</span>
                    <input type="password" ref={passwordRef} required />
                </div>
                <p
                    className="p-1 text-center text-text hover:cursor-pointer"
                    onClick={() => props.setCurrentComponent("forgot")}
                >
                    Forgot your password?
                </p>
                <div>
                    <title>Log out</title>
                    <button
                        disabled={loading}
                        className="filter-btn btn-click disabled:bg-rose-500"
                        role="logout"
                    >
                        Login
                    </button>
                </div>
            </form>
            <p
                className="mt-4 text-center text-xl font-bold underline hover:cursor-pointer"
                onClick={() => props.setCurrentComponent("signup")}
            >
                Create a new account.
            </p>
        </ComponentWrapper>
    );
};

export default LoginSection;

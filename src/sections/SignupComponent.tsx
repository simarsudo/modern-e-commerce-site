import React, { useRef } from "react";
import ComponentWrapper from "../wrappers/ComponentWrapper";
import { fireDB } from "../Firebase";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    getAuth,
    User,
} from "firebase/auth";
import {
    validateEmail,
    validatePassword,
    validateUserName,
} from "../utils/validations";
import { setDoc, doc } from "firebase/firestore";

type Props = {
    setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
};

const SignupSection = (props: Props) => {
    const auth = getAuth();
    const userName = useRef<HTMLInputElement>(null);
    const userEmail = useRef<HTMLInputElement>(null);
    const userPassword = useRef<HTMLInputElement>(null);

    const createUser = async (user: User) => {
        setDoc(doc(fireDB, "users", user.uid), {
            name: userName.current?.value,
            uid: user.uid,
            email: user.email,
            wishlist: [],
            cart: [],
        });
    };

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const name = userName.current?.value;
        const email = userEmail.current?.value;
        const password = userPassword.current?.value;

        if (!validateEmail(email!)) {
            console.log("failed email validation");
            return;
        }
        if (!validateUserName(name!)) {
            console.log("failed name validation");
            return;
        }
        if (!validatePassword(password!)) {
            console.log("failed password validation");
        }
        createUserWithEmailAndPassword(auth, email!, password!)
            .then((userCredentials) => {
                const newUser = userCredentials.user;
                createUser(newUser);
                updateProfile(newUser, {
                    displayName: name,
                })
                    .then(() => {
                        console.log("sucessfully created profile");
                    })
                    .catch((error) => {
                        console.log(
                            "oh no! there was an error when updating the userName",
                            error
                        );
                    });
                console.log(newUser);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <ComponentWrapper className="z-10 mt-4 flex aspect-[1/1.4] w-[90%] origin-top flex-col justify-evenly overflow-hidden rounded bg-bg-dark p-8 text-white md:max-w-[30%]">
            <h2 className="border-b text-center font-highlight text-5xl font-bold md:text-6xl">
                Sign Up
            </h2>
            <form
                className="flex flex-col gap-3 font-semibold text-gray-700"
                onSubmit={submitHandler}
            >
                <div className="flex flex-col ">
                    <span className="text-white">Full Name</span>
                    <input type="text" ref={userName} required />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-white">E-Mail</span>
                    <input type="email" ref={userEmail} required />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-white">Password</span>
                    <input type="password" ref={userPassword} required />
                </div>
                <button className="filter-btn btn-click mt-6">Sign up</button>
            </form>
            <p
                className="mt-4 text-center text-xl font-bold underline hover:cursor-pointer"
                onClick={() => props.setCurrentComponent("login")}
            >
                Already have an account.
            </p>
        </ComponentWrapper>
    );
};

export default SignupSection;

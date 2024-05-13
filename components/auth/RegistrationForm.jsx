"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {
    const router = useRouter();
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const response = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            router.push("/login");
        } else {
            const data = await response.json();
            setError(data.message);
        }
    };

    return (
        <>
            {error && (
                <div className="text-md text-red-500 font-bold mt-2">
                    {error}
                </div>
            )}
            <form className="login-form" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" />
                </div>

                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button type="submit" className="btn-primary w-full mt-4">
                    Create account
                </button>
            </form>
        </>
    );
};

export default RegistrationForm;

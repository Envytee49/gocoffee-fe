'use client';

import React from 'react';
import { fetchFromAPI } from "@/utils/api";
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for app directory

const GoogleLoginBtn = () => {
    const router = useRouter(); // 'next/navigation' router

    const loginWithGoogle = async () => {
        const data = await fetchFromAPI("auth/url", {
            params: { redirect_uri: process.env.NEXT_PUBLIC_HOST_API + '/api/login/google' }
        });
        if (data.ok) {
            const googleLink = await data.json()
            router.push(googleLink.data); // Redirect to the URL
        } else {
            console.error("Error fetching Google login URL:");
        }
    };

    return (
        <button
            onClick={loginWithGoogle}
            className="hover:bg-gray-100 inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
            <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-[18px] w-[18px]"
            />
            Continue with Google
        </button>
    );
};

export default GoogleLoginBtn;

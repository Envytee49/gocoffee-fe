"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LoginBtn: React.FC = () => {
    return (
        <>
            {/* Login Button */}
            <Link
                href={"/login"}
                className="px-8 py-2 rounded-full font-semibold bg-tone-3 hover:bg-tone-2 text-white"
            >
                Login
            </Link>
        </>
    );
};

export default LoginBtn;

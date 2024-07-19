import React from "react";
import Image from "next/image";
import logo from "@/public/dashboard/logo-1.png";

const Header = () => {
    return (
        <div className="py-2 flex items-center justify-center gap-3 rounded shadow-md bg-white">
            <Image src={logo} width={40} height={40} alt="Logo for header" />
            <h1 className="font-bold text-gray-400 text-[20px]">Pokedex</h1>
        </div>
    );
};

export default Header;

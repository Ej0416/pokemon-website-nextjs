import React from "react";
import Image from "next/image";
import logo from "@/public/dashboard/logo-1.png";
import { IoSettingsSharp } from "react-icons/io5";

const Header = () => {
    return (
        <div className="py-2 px-2 flex items-center justify-between gap-3 rounded-lg shadow-md bg-white">
            <div className="flex justify-center items-center gap-1">
                <Image
                    src={logo}
                    width={30}
                    height={30}
                    alt="Logo for header"
                />
                <h1 className="font-bold text-gray-400 text-[16px]">Pokedex</h1>
            </div>
            <button className="text-gray-400">
                <IoSettingsSharp />
            </button>
        </div>
    );
};

export default Header;

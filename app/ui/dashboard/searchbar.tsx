import React from "react";
import Image from "next/image";
import logo from "@/public/dashboard/logo-white.png";

const Searchbar = () => {
    return (
        <div className="py-3 px-3 flex items-center justify-between gap-3 rounded-lg shadow-md bg-white">
            <input
                type="text"
                name="searchPokemon"
                id="searchPokemon"
                placeholder="Search your Pokemon!"
                className="focus:outline-none text-gray-400 text-[12px] w-full"
            />
            <div className="text-gray-400 bg-red-400 shadow-lg shadow-red-500/50 rounded-lg ">
                <Image
                    src={logo}
                    width={30}
                    height={30}
                    alt="Logo for header"
                />
            </div>
        </div>
    );
};

export default Searchbar;

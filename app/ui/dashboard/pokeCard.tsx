import React from "react";
import Image from "next/image";
import { getPokemonSprite, getPokemonTypes } from "@/app/lib/APICall";
import clsx from "clsx";
// { pokemon, index }: Props
interface Props {
    number: any;
    name: string;
    url: string;
}
const PokeCard = async ({ number, name, url }: Props) => {
    const spriteUrl = await getPokemonSprite(url);
    const types = await getPokemonTypes(url);
    number += 1;
    const formattedNumber = number.toString().padStart(4, "0");
    return (
        <div className=" h-[200px] flex flex-col gap-3 items-center relative">
            <div className=" bg-slate-400 rounded-full h-[75px] w-[75px] flex items-center justify-center text-white mt-4">
                <Image
                    src={spriteUrl}
                    width={75}
                    height={75}
                    alt="Pokemon Sprite"
                />
            </div>
            <div className="text-center">
                <h1 className="text-[12px]">{`# ${formattedNumber}`}</h1>
                <h1 className="text-[16px] font-bold uppercase">{name}</h1>
            </div>
            <div className="flex gap-3">
                {types.map((type: any, index: any) => (
                    <div
                        key={index}
                        className={clsx(
                            " rounded-md py-1 px-2 text-xs w-[55px] text-center",
                            {
                                "bg-green-500 text-white":
                                    type.type.name === "grass",
                                "bg-purple-600 text-white":
                                    type.type.name === "poison",
                                "bg-slate-300 text-black":
                                    type.type.name === "normal",
                                "bg-orange-500 text-white":
                                    type.type.name === "fire",
                                "bg-blue-500 text-white":
                                    type.type.name === "water",
                                "bg-yellow-500 text-white":
                                    type.type.name === "electric",
                                "bg-cyan-500 text-black":
                                    type.type.name === "ice",
                                "bg-red-400 text-white":
                                    type.type.name === "fighting",
                                "bg-yellow-900 text-white":
                                    type.type.name === "ground",
                                "bg-cyan-400 text-white":
                                    type.type.name === "flying",
                                "bg-fuchsia-500 text-white":
                                    type.type.name === "psychic",
                                "bg-lime-500 text-white":
                                    type.type.name === "bug",
                                "bg-yellow-600 text-white":
                                    type.type.name === "rock",
                                "bg-purple-500 text-white":
                                    type.type.name === "ghost",
                                "bg-stone-700 text-white":
                                    type.type.name === "dark",
                                "bg-violet-900 text-white":
                                    type.type.name === "dragon",
                                "bg-gray-500 text-white":
                                    type.type.name === "steel",
                                "bg-rose-400 text-white":
                                    type.type.name === "fairy",
                            }
                        )}
                    >
                        {type.type.name}
                    </div>
                ))}
            </div>
            <div className="absolute -z-10 bottom-0 h-[140px] w-full rounded-md shadow bg-white"></div>
        </div>
    );
};

export default PokeCard;

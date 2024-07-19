import React from "react";

const Controls = () => {
    return (
        <div className="py-2 px-2">
            <div className="flex items-center justify-between gap-3">
                <div className="w-2/4 pr-10">
                    <select
                        id="order"
                        name="order"
                        className="select select-ghost w-full max-w-xs focus:outline-none bg-transparent text-xs font-bold"
                    >
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
                <div className="flex items-center justify-between  gap-3 w-2/4">
                    <div className="flex items-center justify-between gap-2">
                        <label htmlFor="from" className="text-xs  font-bold">
                            from
                        </label>
                        <input
                            type="text"
                            name="from"
                            id="from"
                            className="rounded-md focus:outline-none p-1 text-xs w-[40px] shadow"
                        />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <label htmlFor="to" className="text-xs font-bold">
                            to
                        </label>
                        <input
                            type="text"
                            name="to"
                            id="to"
                            className="rounded-md focus:outline-none p-1 text-xs w-[40px] shadow"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <Selections />
            </div>
        </div>
    );
};

export function Selections() {
    return (
        <div className="w-2/4 pr-10">
            <select
                id="order"
                name="order"
                className="select select-ghost w-full max-w-xs focus:outline-none bg-transparent text-xs font-bold"
            >
                <option disabled selected>
                    Pick the best JS framework
                </option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
    );
}

export default Controls;

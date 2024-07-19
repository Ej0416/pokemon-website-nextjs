import React from "react";
import Header from "../ui/dashboard/header";
import Searchbar from "../ui/dashboard/searchbar";
import Controls from "../ui/dashboard/controls";

const Dashbaord = () => {
    return (
        <div className="grid grid-cols-1 gap-2">
            <Header />
            <Searchbar />
            <Controls />
        </div>
    );
};

export default Dashbaord;

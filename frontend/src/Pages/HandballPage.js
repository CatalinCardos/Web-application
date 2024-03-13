import React from "react";
import Navbar from "../Components/Navbar";
import MapComponent from "../Components/MapComponent";
import NavbarHandball from "../Components/NavbarHandball";
import { useState } from "react";

const HandballPage = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="handballPageClass">
            <Navbar />
            <MapComponent />
            <div className="searchField">
            <input type="text" placeholder="Search.." className="searchInput" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <NavbarHandball className = "HandballFieldsList" props ={search}/>

        </div>
    );
};

export default HandballPage;
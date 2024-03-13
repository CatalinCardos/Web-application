import React from "react";
import Navbar from "../Components/Navbar";
import MapComponent from "../Components/MapComponent";
import NavbarTennis from "../Components/NavbarTennis";
import { useState } from "react";
const TennisPage = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="tennisPageClass">
            <Navbar />
            <MapComponent />
            <div className="searchField">
            <input type="text" placeholder="Search.." className="searchInput" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <NavbarTennis className = "TennisFieldsList" props ={search}/>

        </div>
    );
};

export default TennisPage;
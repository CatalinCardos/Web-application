import React from "react";
import Navbar from "../Components/Navbar";
import MapComponent from "../Components/MapComponent";
import NavbarFootball from "../Components/NavbarFootball";
import { useState } from "react";


const FootballPage = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="footballPageClass">
            <Navbar />
            <MapComponent />
            <div className="searchField">
            <input type="text" placeholder="Search.." className="searchInput" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <NavbarFootball className = "FootballFieldsList" props ={search}/>
            
        </div>
    );
};

export default FootballPage;
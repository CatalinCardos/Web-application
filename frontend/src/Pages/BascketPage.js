import React from "react";
import Navbar from "../Components/Navbar";
import MapComponent from "../Components/MapComponent";
import NavbarBasket from "../Components/NavbarBasket";
import { useState } from "react";


const BascketPage = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="bascketPageClass">
        <Navbar />
        <MapComponent />
        <div className="searchField">
            <input type="text" placeholder="Search.." className="searchInput" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
        <NavbarBasket className = "BasketFieldsList" props ={search}/>

        </div>
    );
    };

export default BascketPage;
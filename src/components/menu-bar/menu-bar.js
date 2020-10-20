import React from 'react';
import { Link } from "react-router-dom";

import './menu-bar.css';
import '../../structure.css';

const MenuBar = () => {

    const toggleMenu = () => {

    }
    return (
        <div className={"flex-container menu v-center"}>
            <div className={"title"}><Link to="/" className={"menu-item-text"}>ᛏᚢᛏᚢᚾ Teuton</Link></div>
            <div className={"menu-item"}><Link to="/viewer" className={"menu-item-text"}>View Paradigms</Link></div>
            <div className={"menu-item"}><Link to="/masterdata" className={"menu-item-text"}>Master Data</Link></div>
        </div>
    );
};

export default MenuBar;

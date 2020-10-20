import React from 'react';
import { Link } from "react-router-dom";
import './master-data.css';

const MasterData = () => {
    return (
        <div className={"flex-container row md-container"}>
            <div className={"flex-container col flex table-container table-container-left"}>
                <div className={"title-bar"}>
                    <div className={"title-bar-text"}>Paradigms</div>
                </div>
                <div className={"flex-container row-reverse"}>
                    <div className={"add-button"}><Link to="/paradigm/0" class={"link"}>Add Paradigm</Link></div>
                </div>
            </div>
            <div className={"flex-container col flex table-container table-container-right"}>
                <div className={"title-bar"}>
                    <div className={"title-bar-text"}>Languages</div>
                </div>
                <div className={"flex-container row-reverse"}>
                    <div className={"add-button"}><Link to="/paradigm/0" class={"link"}>Add Language</Link></div>
                </div>
            </div>
        </div>
    );
};

export default MasterData;

import React, { useState } from 'react';
import './viewer-container.css';
import '../../structure.css';
import {FaPlusCircle} from "react-icons/fa";
import ParadigmCard from "../../components/paradigm-card/paradigm-card";


const ViewerContainer = () => {
    // cards = [];
    const [cards, setCards] = useState([]);
    console.log(cards);
    const toggleMenu = (event) => {

        console.log(event.pageX);
        cards.push(
            {
                title: ""
            }
        );

        setCards([...cards]);
        console.log(cards);
    }

    return (
        <div className={"flex-container viewer-container"}>
            <FaPlusCircle className={"add-card"} onClick={(event) => toggleMenu(event)}/>
            {
                cards.map((card, i) => (
                    <ParadigmCard key={i}/>
                ))
            }
        </div>
    );
};

export default ViewerContainer;

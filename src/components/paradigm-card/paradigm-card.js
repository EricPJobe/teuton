import React, { useState } from 'react';
import "./paradigm-card.css"
import interact from 'interactjs'

const ParadigmCard = (props) => {

    const position = { x: 0, y: 0 };

    interact('.draggable').draggable({
        listeners: {
            start (event) {
                console.log(event.type, event.target)
            },
            move (event) {
                position.x += event.dx;
                position.y += event.dy;

                event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
            }
        }
    })

    return (
        <div className={"card-container draggable"}>
            <div className={"title-bar"}>

            </div>
        </div>
    );
};

export default ParadigmCard;

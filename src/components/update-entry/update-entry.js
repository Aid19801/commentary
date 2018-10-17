import React, { Component } from 'react';
import circle from '../../images/circle.png';

import './styles.css';

const UpdatesEntry = (props) => (
    <div className="updates-list-item" key={props.key}>

        <div className="updates-list-circle-container">
            <h4 className="updates-list-item-number">{props.playerNumber}</h4>
            <img
                alt="circle"
                className="update-circle"
                src={circle}
            />
        </div>

        <p className="updates-list-update">{props.update}</p>

    </div>
);

export default UpdatesEntry;

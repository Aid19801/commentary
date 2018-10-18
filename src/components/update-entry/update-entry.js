import React, { Component } from 'react';
import { connect } from 'react-redux';
import circle from '../../images/circle.png';

import './styles.css';

const UpdatesEntry = (props) => {

    if (props.id === props.selectedMoment) {
        return (
        <div className="updates-list-item__selected">

            <div className="updates-list-circle-container">
                <h4 className="updates-list-item-number">{props.time}</h4>
                <img
                    alt="circle"
                    className="update-circle"
                    src={circle}
                />
            </div>

            <p className="updates-list-update__selected">{props.update}</p>

        </div>
        );
    }

    return (
        <div className="updates-list-item">

            <div className="updates-list-circle-container">
                <h4 className="updates-list-item-number">{props.time}</h4>
                <img
                    alt="circle"
                    className="update-circle"
                    src={circle}
                />
            </div>

            <p className="updates-list-update">{props.update}</p>

        </div>
    );
}

const mapStateToProps = (state) => ({
    selectedMoment: state.updatesReducer.selectedMoment
});

export default connect(mapStateToProps, null)(UpdatesEntry);
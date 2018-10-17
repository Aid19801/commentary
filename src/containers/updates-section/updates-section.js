import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title, UpdatesContainer } from '../../components/'
import { GET_UPDATES } from '../../redux/actions';

import './styles.css';

class UpdatesSection extends Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        this.props.getUpdates();
    }

    render() {
        return (
            <div className="updates-section">
                <Title title="Live Commentary"/>
                <UpdatesContainer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUpdates: () => dispatch({ type: GET_UPDATES })
});

export default connect(null, mapDispatchToProps)(UpdatesSection);

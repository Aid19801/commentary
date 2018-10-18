import React, { Component } from 'react';
import { connect } from 'react-redux';
import circle from '../../images/circle.png';
import { UpdatesEntry } from '../../components/'
// import { GET_UPDATES } from '../../redux/actions';

import './styles.css';

class UpdatesContainer extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
        }
    }

    componentWillReceiveProps({ data }) {
        this.setState({
            data,
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="updates-container">
                { data.map((each, i) => {
                    return <UpdatesEntry id={each.id} time={each.time} key={i} update={each.update} />
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.updatesReducer.data,
});

export default connect(mapStateToProps, null)(UpdatesContainer);

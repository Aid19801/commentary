import React, { Component } from 'react';
import { connect } from 'react-redux';
import circle from '../../images/circle.png';
// import { Title } from '../../components/'
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
                {data.map((each, i) => {
                    return (
                        <div className="updates-list-item" key={i}>

                            <div className="updates-list-circle-container">
                                <h4 className="updates-list-item-number">14</h4>
                                <img
                                    alt="circle"
                                    className="update-circle"
                                    src={circle}
                                />
                            </div>
                            
                            <p>{each.update}</p>
                            
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.updatesReducer.data,
});

export default connect(mapStateToProps, null)(UpdatesContainer);

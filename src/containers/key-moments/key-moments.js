import React from 'react';
import { connect } from 'react-redux';
import { Title } from '../../components';
import './styles.css';

class KeyMoments extends React.Component {
    constructor() {
        super();
        this.state = {
            keyMoments: [],
        }
    }

    processMoments = (np) => {
        const { data } = np;
        let filteredToKeyMoments = data.filter((each) => each.isKeyMoment === true);

        this.setState({
            keyMoments: filteredToKeyMoments,
        })
    }
    
    componentWillReceiveProps(nextProps) {
        this.processMoments(nextProps)
    }

    render() {

        const { keyMoments } = this.state;

        return (
            <div className="key-moments-container">
                <Title title="Key Moments" />
                <div className="key-moments-section">
                    { keyMoments.map((each, i) => {
                        return (
                            <div className="key-moments-row">
                                <h2 className="key-moments-playerNumber">{each.playerNumber}</h2>
                                <h4 className="key-moments-text">{each.keyMomentText}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.updatesReducer.data,
})

export default connect(mapStateToProps, null)(KeyMoments);
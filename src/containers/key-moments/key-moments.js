import React from 'react';
import { connect } from 'react-redux';
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
        console.log('THIS state: ', keyMoments);
        return (
            <div className="key-moments-container">
                <h1 className="key-moments-title">key moments</h1>
                <div className="key-moments-section">
                    { keyMoments.map((each, i) => {
                        return (
                            <div className="key-moments-row">
                                <h2>{each.playerNumber}</h2>
                                <h4>{each.keyMomentText}</h4>
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

// const mapDispatchToProps = (dispatch) => ({
//     data: () => dispatch({ type: xxxx })
// })

export default connect(mapStateToProps, null)(KeyMoments);
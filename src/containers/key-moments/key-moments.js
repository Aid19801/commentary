import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

class KeyMoments extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className="key-moments">
                <h1 className="key-moments-title">key moments</h1>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.updatesReducer.data,
})

// const mapDispatchToProps = (dispatch) => ({
//     data: state.updatesReducer.data,
// })

export default connect(mapStateToProps, null)(KeyMoments);
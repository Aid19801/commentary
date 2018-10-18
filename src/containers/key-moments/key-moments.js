import React from 'react';
import { connect } from 'react-redux';
import { SELECT_MOMENT } from '../../redux/actions';
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
    
    handleClick = (id) => {
        this.props.selectMoment(id)
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
                            <div onClick={() => this.handleClick(each.id)} className="key-moments-row" key={i}>
                                <h2 className="key-moments-time">{each.time}</h2>
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

const mapDispatchToProps = (dispatch) => ({
    selectMoment: (id) => dispatch({ type: SELECT_MOMENT, id })
});


export default connect(mapStateToProps, mapDispatchToProps)(KeyMoments);
import React from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../actions';

class AsyncApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getLocation());
    }

    render() {
        return (
            <div>App</div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(AsyncApp);
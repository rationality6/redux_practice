import React, { Component, PropTypes } from 'react';
import {Link,Match} from 'react-router'
import {connect} from 'react-redux';
import ProjectApi from '../utils/ProjectApi'

import Empty from '../components/Empty'
import Topic from '../components/Topic'

class Topics extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.api.getUsers()
    }

    render() {
        const {pathname} = this.props
        return(
            <div>
                <ul>
                    <li><Link to={`${pathname}/rendering`}>Rendering</Link></li>
                    <li><Link to={`${pathname}/foo`}>Fooo</Link></li>
                </ul>
                <br/>
                <Match exactly pattern={pathname} component={Empty}></Match>
                <Match pattern={`${pathname}/:topicId`} component={Topic}></Match>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        users: state.users.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        api: new ProjectApi(dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Topics);

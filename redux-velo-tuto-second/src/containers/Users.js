import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProjectApi from '../utils/ProjectApi'

class Users extends Component {
    constructor(props) {
        super(props)
        this.handleRefresh = this.handleRefresh.bind(this)
    }

    componentDidMount(){
        this.props.api.getUsers()
    }

    handleRefresh() {
        this.props.api.getUsers()
    }

    renderUser(user) {
        return (<div key={`user_${user.id}`}>
            {user.id} | {user.name}
        </div>)
    }

    render() {
        const users = this.props.users.map((user) => this.renderUser(user))
        return (
            <div>
                <button onClick={this.handleRefresh}>Refresh</button>

                <br/>
                Users

                {users}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        api: new ProjectApi(dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Users);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {
    render() {
        const users = this.props.users.map(user => <div>{user}</div>);
        return (
            <div>
                There are {users.length} particpants in the conversation!
                {users}
            </div>
        );
    }
}

UserList.PropTypes = {
    users: PropTypes.arrayOf(PropTypes.string)
}

UserList.defaultProps = {
    user: []
}

export default UserList;
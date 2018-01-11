import { connect } from 'react-redux';
import { addMessage } from '../redux/actions';
import UserList from './presenter';

const mapStateToProps = state => ({
    users: [...new Set(state.messages.map(message => message.author))]
});

export default connect(mapStateToProps)(UserList);
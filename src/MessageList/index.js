import { connect } from 'react-redux';
import { addMessage } from '../redux/actions';
import MessageList from './presenter';

const mapStateToProps = state => ({
    messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  addMessage: (author, text, date) => dispatch(addMessage(author, text, date))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
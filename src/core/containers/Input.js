import { connect } from 'react-redux';
import Input from '../components/Input';
import StoreContext from '../stores/StoreContext';
import { addHistory } from '../actions/Input';

export default connect(
  ({ history }) => ({ history }),
  { addHistory },
  null,
  { context: StoreContext })(Input);
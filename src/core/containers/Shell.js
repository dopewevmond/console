import { connect } from 'react-redux';
import Shell from '../components/Shell';
import StoreContext from '../stores/StoreContext';
import { setTheme, setLayout } from '../actions/Settings';

export default connect(
  ({ settings}) => ({ theme: settings.theme, layout: settings.layout}),
  { setTheme, setLayout },
  null,
  { context: StoreContext })(Shell);
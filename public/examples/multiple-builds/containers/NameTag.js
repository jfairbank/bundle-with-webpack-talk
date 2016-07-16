import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../redux-shared';
import NameTag from '../components/NameTag';

export function mapStateToProps(state) {
  return {
    name: state.name,
    job: state.job,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onUpdateName: actions.updateName,
    onUpdateJob: actions.updateJob,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameTag);

import { bindActionCreators } from 'redux';
import { actions } from '../../../../../redux-shared';

function mapStateToTarget(state) {
  return {
    name: state.name,
    job: state.job,
  };
}

function mapDispatchToTarget(dispatch) {
  return bindActionCreators({
    onUpdateName: actions.updateName,
    onUpdateJob: actions.updateJob,
  }, dispatch);
}

export default class NameTagController {
  constructor($ngRedux, $scope) {
    const unsubscribe = $ngRedux.connect(
      mapStateToTarget,
      mapDispatchToTarget
    )(this);

    $scope.$on('$destroy', unsubscribe);
  }
}

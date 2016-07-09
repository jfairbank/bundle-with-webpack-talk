import { UPDATE_NAME, UPDATE_JOB } from './actionTypes';

const INITIAL_STATE = {
  name: 'Jeremy',
  job: 'Programmer',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };

    case UPDATE_JOB:
      return { ...state, job: action.payload };

    default:
      return state;
  }
}

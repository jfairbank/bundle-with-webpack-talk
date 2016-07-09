import { UPDATE_NAME, UPDATE_JOB } from './actionTypes';

export const updateName = (name) => ({
  type: UPDATE_NAME,
  payload: name,
});

export const updateJob = (job) => ({
  type: UPDATE_JOB,
  payload: job,
});

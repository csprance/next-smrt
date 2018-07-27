import { Dispatch } from 'redux';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { ErrorTypes, UserData } from './types';
import { RootState } from '../index';
import { notify, fetchFormResponse } from './form-helpers';

export const request = createAction('form/REQUEST');

export const success = createAction('form/SUCCESS');

export const failed = createAction(
  'form/FAILED',
  resolve => (error: ErrorTypes) => resolve(error)
);

export const submitForm = createAsyncAction(
  'form/REQUEST',
  'form/SUCCESS',
  'form/FAILED'
)<void, void, ErrorTypes>();

export const submitFormFlow = async (
  userData: UserData,
  dispatch: Dispatch<RootState>
) => {
  // Request the data from the server
  dispatch(submitForm.request());
  const { error, success } = await fetchFormResponse(userData);
  notify({ error, success });
  if (error) {
    dispatch(submitForm.failure(error));
    return false;
  }
  if (success) {
    dispatch(submitForm.success());
    return true;
  }
};

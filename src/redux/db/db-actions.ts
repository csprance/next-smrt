import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { RootState } from '../index';
import { executeQuery } from './db-helpers';

export const queryDb = createAsyncAction(
  'db/REQUEST',
  'db/SUCCESS',
  'db/FAILED'
)<string, any[], string>();

export const queryDbFlow = async (
  query: string,
  dispatch: Dispatch<RootState>
): Promise<void> => {
  // Tell Redux were requesting data from the db
  dispatch(queryDb.request(query));
  try {
    // Do the actual request
    dispatch(queryDb.success(await executeQuery(query)));
  } catch (err) {
    // Catch the err
    queryDb.failure(err.toString());
  }
};

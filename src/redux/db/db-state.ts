// The Default state for the db
import { DbState } from './db-types';

export default {
  query: '',
  querying: false,
  error: '',
  results: [
    {
      data1: 'data1',
      data2: 'data2',
      data3: 1
    }
  ]
} as DbState;

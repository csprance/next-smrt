// Db Types
// All the types associated with the state from the db
export interface DbState {
  // The last query used
  query: string;
  // A string error
  error: string;
  // Is there a request in progress
  querying: boolean;
  // The Results of the query
  results: any[];
}

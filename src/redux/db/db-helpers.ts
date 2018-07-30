/** DB
 * project: eibot
 * author: Chris Sprance - csprance
 * description: Contains the sqlite db api. This should be a singleton
 */

// Execute a query and return the results
export const executeQuery = async (query: string): Promise<any[]> => {
  return await [query];
};

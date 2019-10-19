export const reduceToIDs = (acc: number[], val: { id: number }) => {
  acc.push(val.id);
  return acc;
};

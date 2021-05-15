import { reduceToIDs } from '../../../lib/utils';
import {
  completedTodosSelector,
  todoByIdSelector,
  unfinishedTodosSelector,
} from '../selectors';
import { defaultState } from '../state';

describe('Todo Selectors', () => {
  it('Should get the completed todos', () => {
    const completedTodosIDs = completedTodosSelector
      .resultFunc([...defaultState])
      .reduce(reduceToIDs, [] as number[]);
    expect(completedTodosIDs).toEqual([0, 1, 2]);
  });

  it('Should get the unfinished todos', () => {
    const unfinishedTodosIDs = unfinishedTodosSelector
      .resultFunc([...defaultState])
      .reduce(reduceToIDs, [] as number[]);
    expect(unfinishedTodosIDs).toEqual([3, 4, 5]);
  });

  it('Should get a specific todo by ID', () => {
    const todoByID = todoByIdSelector.resultFunc(defaultState, 1);
    expect(todoByID).toEqual(defaultState[1]);
  });
});

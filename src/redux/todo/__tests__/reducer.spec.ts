import  reducer, {todoSlice} from '../todoSlice';

const actions = todoSlice.actions;
describe('Todos Reducer', () => {
  it('Should Add a New Todo', () => {
    const todo = {
      id: -1,
      todoText: 'Test Reducer',
      completed: false
    };
    expect(reducer([], actions.addTodo(todo))).toEqual([todo]);
  });

  it('Should remove Todo', () => {
    expect(
      reducer(
        [
          {
            id: 0,
            todoText: 'Clone Next-SMRT Repository',
            completed: true
          }
        ],
        actions.removeTodo(0)
      )
    ).toEqual([]);
  });

  it('Should toggle a Todo', () => {
    expect(
      reducer(
        [
          {
            id: 0,
            todoText: 'Clone Next-SMRT Repository',
            completed: false
          }
        ],
        actions.toggleComplete(0)
      )
    ).toEqual([
      {
        id: 0,
        todoText: 'Clone Next-SMRT Repository',
        completed: true
      }
    ]);
  });
});

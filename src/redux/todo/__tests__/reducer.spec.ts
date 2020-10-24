import reducer, { addTodo, removeTodo, toggleComplete } from '../slice';

describe('Todos Reducer', () => {
  it('Should Add a New Todo', () => {
    const todo = {
      id: -1,
      todoText: 'Test Reducer',
      completed: false,
    };
    expect(reducer([], addTodo(todo))).toEqual([todo]);
  });

  it('Should remove Todo', () => {
    expect(
      reducer(
        [
          {
            id: 0,
            todoText: 'Clone Next-SMRT Repository',
            completed: true,
          },
        ],
        removeTodo(0)
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
            completed: false,
          },
        ],
        toggleComplete(0)
      )
    ).toEqual([
      {
        id: 0,
        todoText: 'Clone Next-SMRT Repository',
        completed: true,
      },
    ]);
  });
});

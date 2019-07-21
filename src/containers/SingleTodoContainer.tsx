import * as React from 'react';
import { connect } from 'react-redux';

import SingleTodo from '../components/SingleTodo';
import { Dispatch, RootState } from '../redux/redux-types';
import { actions as todoActions } from '../redux/todo';
import { todoByIdSelector } from '../redux/todo/selectors';
import { Todo } from '../redux/todo/types';

interface Props {
  id: number;
}
interface ReduxProps {
  todo: Todo | undefined;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
const SingleTodoContainer: React.FunctionComponent<Props & ReduxProps> = ({
  todo,
  toggleTodo,
  deleteTodo
}) => {
  if (!todo) {
    return <div>Todo Not Found</div>;
  }
  const { id } = todo;
  const handleCheckBoxTick = () => toggleTodo(id);
  const handleDelete = () => deleteTodo(id);

  return (
    <SingleTodo
      key={id}
      todo={todo}
      handleCheckBoxTick={handleCheckBoxTick}
      handleDelete={handleDelete}
    />
  );
};

export default connect(
  (state: RootState, props: Props) => ({
    todo: todoByIdSelector(state, props)
  }),
  (dispatch: Dispatch) => ({
    toggleTodo: (id: number) => dispatch(todoActions.toggleComplete(id)),
    deleteTodo: (id: number) => dispatch(todoActions.removeTodo(id))
  })
)(SingleTodoContainer);

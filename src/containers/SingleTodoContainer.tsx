import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SingleTodo from '../components/SingleTodo';
import { actions as todoActions } from '../redux/todo';
import { todoByIdSelector } from '../redux/todo/selectors';

interface Props {
  id: number;
}
const SingleTodoContainer: React.FunctionComponent<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useSelector(state => todoByIdSelector(state, { id }));
  const toggleTodo = () => dispatch(todoActions.toggleComplete(id));
  const deleteTodo = () => dispatch(todoActions.removeTodo(id));

  if (!todo) {
    return <div>Todo Not Found</div>;
  }
  return (
    <SingleTodo
      key={id}
      todo={todo}
      handleCheckBoxTick={toggleTodo}
      handleDelete={deleteTodo}
    />
  );
};

export default SingleTodoContainer;

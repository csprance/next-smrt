import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SingleTodo from '../components/SingleTodo';
import { todoByIdSelector } from '../redux/todo/selectors';
import { removeTodo, toggleComplete } from '../redux/todo/todoSlice';

interface Props {
  id: number;
}
const SingleTodoContainer: React.FunctionComponent<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => todoByIdSelector(state, { id }));
  const toggleTodo = () => dispatch(toggleComplete(id));
  const deleteTodo = () => dispatch(removeTodo(id));

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

import * as React from 'react';
import { connect } from 'react-redux';

import SingleTodo from '../components/SingleTodo';
import { Dispatch, RootState } from '../redux/redux-types';
import { todoByIdSelector } from '../redux/todo/selectors';
import { Todo } from '../redux/todo/types';

interface Props {
  id: number;
}
interface ReduxProps {
  todo: Todo | undefined;
}
const SingleTodoContainer: React.FunctionComponent<Props & ReduxProps> = ({
  todo
}) => {
  const handleCheckBoxTick = () => {
    return false;
  };
  const handleDelete = () => {
    return false;
  };
  if (!todo) {
    return <div>Todo Not Found</div>;
  }
  return (
    <SingleTodo
      todo={todo}
      handleCheckBoxTick={handleCheckBoxTick}
      handleDelete={handleDelete}
    />
  );
};

const mapStateToProps = (state: RootState, props: Props) => ({
  todo: todoByIdSelector(state, props)
});
const mapDispatchToProps = (_dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(
  SingleTodoContainer
);

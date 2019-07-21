import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { media } from '../../styles/styles';
import SingleTodo from '../components/SingleTodo';
import { Dispatch, RootState } from '../redux/redux-types';
import { actions as todoActions, Types as TodoTypes } from '../redux/todo';
import { rehydratedSelector, todoSelector } from '../redux/todo/selectors';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  ${media.tablet`
      flex-direction: column;
  `};
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  max-width: 900px;
  justify-content: center;
  align-items: center;
`;
const Spacer = styled.div`
  height: 50px;
`;

type Props = {
  todos: TodoTypes.State;
  addTodo: (todo: TodoTypes.Todo) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  rehydrated: boolean;
};
type State = {
  todo: string;
};
const HomePageContainer: React.FunctionComponent<Props> = ({
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
  rehydrated
}) => {
  const [state, setState] = React.useState<State>({
    todo: ''
  });
  const handleCheckBoxTick = (id: number) => toggleTodo(id);
  const handleDelete = (id: number) => deleteTodo(id);
  const handleClick = async () => {
    addTodo({
      todoText: state.todo,
      id: Date.now(),
      completed: false
    });
    setState({
      todo: ''
    });
  };
  const handleChange = (e: any) => {
    setState({
      todo: e.target.value
    });
  };
  const { todo } = state;

  return (
    <>
      <Column>
        <Row>
          <TextField
            fullWidth
            id="todo"
            label="Add Todo"
            value={todo}
            onChange={handleChange}
            margin="normal"
          />
          <Fab
            href={'#'}
            size={'small'}
            onClick={handleClick}
            color="secondary"
            aria-label="Add"
          >
            <AddIcon />
          </Fab>
        </Row>
      </Column>
      <Spacer />
      <Column>
        {rehydrated
          ? todos.map(item => (
              <SingleTodo
                handleDelete={handleDelete}
                handleCheckBoxTick={handleCheckBoxTick}
                todo={item}
                key={item.id}
              />
            ))
          : ' Loading ...'}
      </Column>
    </>
  );
};

export default connect(
  (state: RootState) => ({
    todos: todoSelector(state),
    rehydrated: rehydratedSelector(state)
  }),
  (dispatch: Dispatch) => ({
    addTodo: (todo: TodoTypes.Todo) => dispatch(todoActions.addTodoThunk(todo)),
    toggleTodo: (id: number) => dispatch(todoActions.toggleComplete(id)),
    deleteTodo: (id: number) => dispatch(todoActions.removeTodo(id))
  })
)(HomePageContainer);

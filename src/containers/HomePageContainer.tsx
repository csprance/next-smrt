import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { media } from '../../styles/styles';
import SingleTodo from '../components/SingleTodo';
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

type Props = {};
type State = {
  todo: string;
};
const HomePageContainer: React.FunctionComponent<Props> = ({}) => {
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);
  const rehydrated = useSelector(rehydratedSelector);
  const addTodo = (_todo: TodoTypes.Todo) => dispatch(todoActions.addTodoThunk(_todo));
  const toggleTodo = (id: number) => dispatch(todoActions.toggleComplete(id));
  const deleteTodo = (id: number) => dispatch(todoActions.removeTodo(id));
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

export default HomePageContainer;

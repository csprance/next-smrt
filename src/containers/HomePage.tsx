import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { media } from '../../styles/styles';
import SingleTodo from '../components/SingleTodo';
import { notify } from '../lib/notify';
import { Dispatch, RootState } from '../redux/redux-types';
import { actions as todoActions, Types as TodoTypes } from '../redux/todo';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin-bottom: 35px;
  flex-direction: column;
`;
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

const HomePage = ({
  todos,
  addTodoFlow,
  toggleComplete,
  deleteTodo
}: {
  todos: TodoTypes.State;
  addTodoFlow: (todo: TodoTypes.Todo) => Promise<void>;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}) => {
  console.log(React);

  const { useState } = React;
  const [todo, setTodo] = useState<string>('');

  const handleMenuButtonClick = () => {
    notify('Also comes with SweetAlert');
  };

  const handleClick = async () => {
    await addTodoFlow({
      todoText: todo,
      id: Date.now(),
      completed: false
    });
    setTodo('');
  };

  const handleChange = e => {
    setTodo(e.target.value);
  };

  return (
    <Wrapper>
      <Head>
        <title>Next-SMRT - Todo</title>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleMenuButtonClick}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Next-SMRT
          </Typography>
        </Toolbar>
      </AppBar>

      <Spacer />

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
            disabled={todo.trim().length === 0}
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
        {todos.map(item => (
          <SingleTodo
            handleDelete={deleteTodo}
            handleCheckBoxTick={toggleComplete}
            todo={item}
            key={item.id}
          />
        ))}
      </Column>

      <Spacer />

      <Link href={'/about'}>
        <a>About</a>
      </Link>
    </Wrapper>
  );
};

export default connect(
  (store: RootState) => ({
    todos: store.todo
  }),
  (dispatch: Dispatch) => ({
    addTodoFlow: (todo: TodoTypes.Todo) =>
      dispatch(todoActions.addTodoThunk(todo)),
    toggleComplete: (id: number) => dispatch(todoActions.toggleComplete(id)),
    deleteTodo: (id: number) => dispatch(todoActions.removeTodo(id))
  })
)(HomePage);

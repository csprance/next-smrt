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

type Props = {
  todos?: TodoTypes.State;
  addTodoFlow?: (todo: TodoTypes.Todo) => Promise<void>;
  toggleComplete?: (id: number) => void;
  deleteTodo?: (id: number) => void;
};
type State = {
  todo: string;
};
class HomePage extends React.Component<Props, State> {
  public static defaultProps = {};
  state = {
    todo: ''
  };

  handleMenuButtonClick = () => {
    notify('Also comes with SweetAlert');
  };

  handleCheckBoxTick = id => {
    this.props.toggleComplete(id);
  };

  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  handleClick = async () => {
    this.props.addTodoFlow({
      todoText: this.state.todo,
      id: Date.now(),
      completed: false
    });
    this.setState({
      todo: ''
    });
  };

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  render() {
    const { todos } = this.props;
    const { todo } = this.state;
    return (
      <Wrapper>
        <Head>
          <title>Next-SMRT - Todo</title>
        </Head>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={this.handleMenuButtonClick}
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
              onChange={this.handleChange}
              margin="normal"
            />
            <Fab
              size={'small'}
              onClick={this.handleClick}
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
              handleDelete={this.handleDelete}
              handleCheckBoxTick={this.handleCheckBoxTick}
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
  }
}

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

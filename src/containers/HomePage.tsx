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
import { rehydratedSelector, todoSelector } from '../redux/todo/selectors';

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
  todos: TodoTypes.State;
  addTodo: (todo: TodoTypes.Todo) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  rehydrated: boolean;
};
type State = {
  todo: string;
};
class HomePage extends React.Component<Props, State> {
  public static defaultProps = {};
  state: State = {
    todo: ''
  };

  handleMenuButtonClick = () => {
    notify('Also comes with SweetAlert');
  };

  handleCheckBoxTick = (id: number) => {
    this.props.toggleTodo(id);
  };

  handleDelete = (id: number) => {
    this.props.deleteTodo(id);
  };

  handleClick = async () => {
    this.props.addTodo({
      todoText: this.state.todo,
      id: Date.now(),
      completed: false
    });
    this.setState({
      todo: ''
    });
  };

  handleChange = (e: any) => {
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
          {this.props.rehydrated
            ? todos.map(item => (
                <SingleTodo
                  handleDelete={this.handleDelete}
                  handleCheckBoxTick={this.handleCheckBoxTick}
                  todo={item}
                  key={item.id}
                />
              ))
            : ' Loading ...'}
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
  (state: RootState) => ({
    todos: todoSelector(state),
    rehydrated: rehydratedSelector(state)
  }),
  (dispatch: Dispatch) => ({
    addTodo: (todo: TodoTypes.Todo) => dispatch(todoActions.addTodoThunk(todo)),
    toggleTodo: (id: number) => dispatch(todoActions.toggleComplete(id)),
    deleteTodo: (id: number) => dispatch(todoActions.removeTodo(id))
  })
)(HomePage);

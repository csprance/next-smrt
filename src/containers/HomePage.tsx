import * as React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import { media } from '../../styles/styles';
import { RootState } from '../redux';
import { TodoState } from '../redux/todo';
import { addTodoFlow, toggleComplete } from '../redux/todo/todo-actions';
import SingleTodo from '../components/SingleTodo';
import { Todo } from '../redux/todo/todo-types';
import { notify } from '../lib/notify';

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
  todo: TodoState;
  addTodoFlow: (todo: Todo) => Promise<void>;
  toggleComplete: (id: number) => void;
};
type State = {
  todo: string;
};
class HomePage extends React.Component<Props, State> {
  static defaultProps = {};
  state = {
    todo: ''
  };

  handleMenuButtonClick = () => {
    notify('Also comes with SweetAlert');
  };

  handleCheckBoxTick = id => {
    this.props.toggleComplete(id);
  };

  handleClick = () => {
    this.props.addTodoFlow({
      dateAdded: new Date(),
      todoText: this.state.todo,
      id: Date.now(),
      expires: false,
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
    return (
      <Wrapper>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={this.handleMenuButtonClick}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
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
              value={this.state.todo}
              onChange={this.handleChange}
              margin="normal"
            />
            <Button
              onClick={this.handleClick}
              variant="fab"
              color="secondary"
              mini
              aria-label="Add"
            >
              <AddIcon />
            </Button>
          </Row>
        </Column>
        <Spacer />
        <Column>
          {this.props.todo.map(item => (
            <SingleTodo
              handleCheckBoxTick={this.handleCheckBoxTick}
              todo={item}
              key={item.id}
            />
          ))}
        </Column>
      </Wrapper>
    );
  }
}

export default connect(
  (store: RootState) => ({
    todo: store.todo
  }),
  dispatch => ({
    addTodoFlow: (todo: Todo) => addTodoFlow(todo, dispatch),
    toggleComplete: (id: number) => dispatch(toggleComplete(id))
  })
)(HomePage);

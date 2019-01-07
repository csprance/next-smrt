import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography/Typography';
import * as React from 'react';
import styled from 'styled-components';
import { Types as TodoTypes } from '../redux/todo';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  max-width: 900px;
  height: 50px;
  margin: 10px;
  align-items: center;
`;
const Spacer = styled.div`
  flex-grow: 5;
`;

type Props = {
  todo: TodoTypes.Todo;
  handleCheckBoxTick: any;
};
class SingleTodo extends React.Component<Props> {
  render() {
    const { todo } = this.props;
    return (
      <Wrapper>
        <Typography
          variant={'h5'}
          gutterBottom
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'gray' : 'inherit'
          }}
        >
          {todo.todoText}
        </Typography>
        <Spacer />
        <Checkbox
          checked={todo.completed}
          onChange={() => this.props.handleCheckBoxTick(todo.id)}
        />
      </Wrapper>
    );
  }
}

export default SingleTodo;

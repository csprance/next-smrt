import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
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
  handleCheckBoxTick: () => void;
  handleDelete: () => void;
};
const SingleTodo: React.FunctionComponent<Props> = ({
  todo,
  handleDelete,
  handleCheckBoxTick
}) => {
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
        <Link href={`/todo/[id]`} as={`/todo/${todo.id}`}>
          <a>{todo.todoText}</a>
        </Link>
      </Typography>
      <Spacer />

      <IconButton href={'#'} onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>

      <Checkbox checked={todo.completed} onChange={handleCheckBoxTick} />
    </Wrapper>
  );
};

export default SingleTodo;

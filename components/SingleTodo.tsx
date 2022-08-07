import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import {useStore} from "../store";

import { Todo } from '../store/todo/types';

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

interface Props {
  todo?: Todo;
}
const SingleTodo: React.FunctionComponent<Props> = ({
  todo
}) => {
    if (!todo) {
        return <div>Todo Not Found</div>;
    }
    const { removeTodo, toggleComplete } = useStore();
    const toggleTodo = () => toggleComplete(todo.id);
    const deleteTodo = () => removeTodo(todo.id);

  return (
    <Wrapper>
      <Typography
        variant={'h5'}
        gutterBottom
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'gray' : 'inherit',
        }}
      >
        <Link href={`/todo/[id]`} as={`/todo/${todo.id}`}>
          <a style={{ textDecoration: 'none', color: 'inherit' }}>
            {todo.text}
          </a>
        </Link>
      </Typography>
      <Spacer />

      <IconButton href={'#'} onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>

      <Checkbox checked={todo.completed} onChange={toggleTodo} />
    </Wrapper>
  );
};

export default SingleTodo;

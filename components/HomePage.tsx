import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import * as React from 'react';

import { useStore } from '../store';
import { media } from '../styles/styles';
import SingleTodo from './SingleTodo';

// @ts-ignore
const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  ${media.tablet`
      flex-direction: column;
  `};
`;
const Row = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  max-width: 900px;
  width: 100%;
`;
const Spacer = styled.div`
  height: 50px;
`;

const HomePage: React.FC = () => {
  // Global State
  const { todos, addTodo } = useStore();

  // Component State
  const [todoText, setTodoText] = React.useState<string>('');
  const [error, setError] = React.useState(false);
  const handleChange = (e: any) => {
    if (error) {
      setError(false);
    }
    setTodoText(e.target.value);
  };
  const handleEnterPressed = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };
  const handleAddTodo = () => {
    if (todoText.length === 0) {
      return setError(true);
    }
    addTodo(todoText);
    setTodoText(''); // Clear the text out
  };

  return (
    <>
      <Column>
        <Row>
          <TextField
            variant={'standard'}
            onKeyDown={handleEnterPressed}
            error={error}
            helperText={error ? 'Please Include Some text.' : ''}
            fullWidth
            id="todo"
            label="Add Todo"
            margin="normal"
            onChange={handleChange}
            value={todoText}
          />
          <Fab
            href={'#'}
            size={'small'}
            onClick={handleAddTodo}
            color="secondary"
            aria-label="Add"
          >
            <AddIcon />
          </Fab>
        </Row>
      </Column>
      <Spacer />
      <Column>
        {todos.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </Column>
    </>
  );
};

export default HomePage;

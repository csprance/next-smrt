import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { media } from '../../styles/styles';
import { actions as todoActions } from '../redux/todo';
import { rehydratedSelector, todoSelector } from '../redux/todo/selectors';
import SingleTodoContainer from './SingleTodoContainer';

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

type Props = {};
const HomePageContainer: React.FunctionComponent<Props> = ({}) => {
  // Component State
  const [todoText, setTodoText] = React.useState<string>('');
  const [error, setError] = React.useState(false);
  const handleChange = (e: any) => {
    if (error) {
      setError(false);
    }
    setTodoText(e.target.value);
  };

  // Redux
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);
  const rehydrated = useSelector(rehydratedSelector);
  const handleEnterPressed = event => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };
  const handleAddTodo = () => {
    if (todoText.length === 0) {
      return setError(true);
    }
    dispatch(
      todoActions.addTodoThunk({
        todoText,
        id: Date.now(),
        completed: false
      })
    );
    setTodoText('');
  };

  return (
    <>
      <Column>
        <Row>
          <TextField
            onKeyPress={handleEnterPressed}
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
        {rehydrated
          ? todos.map(item => (
              <SingleTodoContainer key={item.id} id={item.id} />
            ))
          : ' Loading ...'}
      </Column>
    </>
  );
};

export default HomePageContainer;

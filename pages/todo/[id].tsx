import { Box } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '../../components/Layout';
import SingleTodo from '../../components/SingleTodo';
import { getCookieProps } from '../../lib/cookie-persist';
import { useStore } from '../../store';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { state: getCookieProps(context) },
  };
};

const TodoIDPage: NextPage = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  // If we find a todo great! If not the SingleTodoContainer handles the missing case
  const { todos } = useStore();
  const todo = todos.find((todo) => todo.id === Number(id));

  return (
    <Layout>
      <Box
        width={'100%'}
        flexGrow={1}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <SingleTodo todo={todo} />
      </Box>
    </Layout>
  );
};

export default TodoIDPage;

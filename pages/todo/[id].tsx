import Box from '@material-ui/core/Box';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '../../src/components/Layout';
import SingleTodoContainer from '../../src/containers/SingleTodoContainer';

const TodoIDPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Box
        width={'100%'}
        flexGrow={1}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <SingleTodoContainer id={Number(id)} />
      </Box>
    </Layout>
  );
};

export default TodoIDPage;

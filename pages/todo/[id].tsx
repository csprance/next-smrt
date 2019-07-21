import {NextPage} from 'next';
import { useRouter } from 'next/router'
import * as React from 'react';
import styled from 'styled-components';

import Layout from '../../src/components/Layout';
import SingleTodoContainer from '../../src/containers/SingleTodoContainer';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

interface Props {}
const TodoIDPage: NextPage<Props> = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <SingleTodoContainer id={Number(id)} />
    </Layout>
  );
};

export default TodoIDPage;

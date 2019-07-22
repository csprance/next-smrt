import axios from 'axios';
import { NextPage } from 'next';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import * as React from 'react';
import styled from 'styled-components';
import Layout from '../src/components/Layout';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

interface Props {}
interface State {}
const Profile: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <Wrapper>Profile</Wrapper>
    </Layout>
  );
};

Profile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  const url = `${process.env.API_URL}/api/profile`;

  const redirectOnError = () =>
    typeof window !== 'undefined'
      ? Router.push('/login')
      : ctx.res.writeHead(302, { Location: '/login' }).end();

  try {
    const { data } = await axios.post(
      url,
      {
        credentials: 'include'
      },
      {
        headers: {
          Authorization: JSON.stringify({ token })
        }
      }
    );

    if (data) {
      return data;
    }

    return redirectOnError();
  } catch (error) {
    // Implementation or Network error
    return redirectOnError();
  }
};
export default Profile;

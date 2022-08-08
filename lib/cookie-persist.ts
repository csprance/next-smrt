import { GetServerSidePropsContext } from 'next';
import nookie, { parseCookies } from 'nookies';

import { STATE_KEY, State } from '../store';

export function getCookieStore(): object {
  const cookies = parseCookies();

  return STATE_KEY in cookies ? (JSON.parse(cookies[STATE_KEY]) as State) : {};
}

export function getCookieProps(context: GetServerSidePropsContext) {
  const cookies = nookie.get(context);

  return STATE_KEY in cookies ? (JSON.parse(cookies[STATE_KEY]) as State) : {};
}

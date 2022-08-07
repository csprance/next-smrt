import { parseCookies } from 'nookies';

import { STATE_KEY } from '../store';

export function getCookieState<T>(initialState: T): T {
  const cookies = parseCookies();

  if (STATE_KEY in cookies) {
    const state = JSON.parse(cookies[STATE_KEY]);
    return {
      // Merged with new state
      ...state,
    };
  }
  // just return initial state
  return { ...initialState };
}

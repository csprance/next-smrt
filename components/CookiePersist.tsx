import { setCookie } from 'nookies';
import * as React from 'react';
import { PropsWithChildren, useEffect } from 'react';

import { STATE_KEY, useStore } from '../store';
import { filterObjectByKeys } from '../store/todo/utils';

interface Config {
  blacklist: string[];
}

interface Props extends PropsWithChildren {
  config?: Config;
}

const CookiePersistWrapper: React.FC<Props> = ({
  config: { blacklist } = { blacklist: [] },
  children,
}) => {
  const state = useStore((state) => state);

  useEffect(() => {
    // Filter out state and set it to a cookie
    const filteredState = filterObjectByKeys(state, blacklist);
    console.log(
      'Setting Cookie State from CookiePersistWrapper: ',
      filteredState,
    );
    setCookie(null, STATE_KEY, JSON.stringify(filteredState));
  }, [state, blacklist]);

  return <>{children}</>;
};

export default CookiePersistWrapper;

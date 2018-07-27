import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Button from './Button';

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

type Props = {};
type State = {};

class ErrorComponent extends React.Component<Props, State> {
  static defaultProps = {};

  render() {
    return (
      <FlexCenter>
        <img
          src="/static/404.png"
          alt=""
          style={{ maxWidth: '100%', paddingTop: '25px' }}
        />
        <h1>404</h1>
        <p style={{ paddingBottom: '25px' }}>
          We've dispatched the gnomes to take care of it.
        </p>
        <Link href={'/dev-blog'}>
          <Button>Go Back</Button>
        </Link>
        <p style={{ paddingBottom: '25px' }} />
      </FlexCenter>
    );
  }
}

export default ErrorComponent;

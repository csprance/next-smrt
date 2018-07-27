import * as React from 'react';
import { white } from '../../../styles/colors';

type Props = {
  fill?: string;
};
export default class ShareIcon extends React.Component<Props> {
  static defaultProps = {
    fill: white
  };

  render() {
    return (
      <svg
        viewBox="0 0 100 125"
        fill={this.props.fill}
        width={'28px'}
        height={'28px'}
        {...this.props}
      >
        <path d="M78 66c-4 0-8 2-10 4L38 53a13 13 0 0 0 0-6l30-17c2 2 6 4 10 4a16 16 0 1 0 0-31 16 16 0 0 0-16 18L32 38c-2-2-6-4-10-4a16 16 0 1 0 10 28l31 17-1 3a16 16 0 1 0 32 0c0-9-7-16-16-16z" />
      </svg>
    );
  }
}

import * as React from 'react';
import { white } from '../../../styles/colors';

type Props = {
  fill?: string;
};
export default class HeartFilledIcon extends React.Component<Props> {
  static defaultProps = {
    fill: white
  };

  render() {
    return (
      <svg
        fill={this.props.fill}
        role="img"
        viewBox="0 0 100 125"
        xmlns="http://www.w3.org/2000/svg"
        width={'28px'}
      >
        <path d="M72.979,15.101c-10.028,0-18.698,5.779-22.875,14.187c-4.182-8.408-12.847-14.187-22.879-14.187  c-14.098,0-25.534,11.431-25.534,25.536c0,33.69,47.881,52.133,47.881,52.133s48.941-18.676,48.941-52.133  C98.514,26.532,87.08,15.101,72.979,15.101L72.979,15.101z" />
      </svg>
    );
  }
}


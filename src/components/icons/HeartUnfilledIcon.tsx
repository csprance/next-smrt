import * as React from 'react';
import { white } from '../../../styles/colors';

type Props = {
  fill?: string;
};
export default class HeartUnfilledIcon extends React.Component<Props> {
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
        <path d="M72.979,21.581c10.506,0,19.054,8.548,19.054,19.055c0,24.742-33.252,41.063-42.445,45.101  C40.542,81.708,8.172,65.543,8.172,40.636c0-10.507,8.547-19.055,19.053-19.055c7.284,0,13.827,4.059,17.077,10.592l5.806,11.672  l5.8-11.675C59.153,25.639,65.694,21.581,72.979,21.581 M72.979,15.101c-10.028,0-18.698,5.779-22.875,14.187  c-4.182-8.408-12.847-14.187-22.879-14.187c-14.098,0-25.534,11.431-25.534,25.536c0,33.69,47.881,52.133,47.881,52.133  s48.941-18.676,48.941-52.133C98.514,26.532,87.08,15.101,72.979,15.101L72.979,15.101z"/>
      </svg>
    );
  }
}


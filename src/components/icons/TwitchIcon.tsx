import * as React from 'react';
import { white } from '../../../styles/colors';

type Props = {
  fill?: string;
};
class TwitchIcon extends React.Component<Props> {
  static defaultProps = {
    fill: white
  };

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="-14 778 28 28" fill={this.props.fill} width={'28px'}>
        <path d="M10 793l-4 4H0l-3 3v-3h-5v-16h18v12zm-20-14l-2 4v20h5v2h3l3-2h4l9-9v-15h-22z"/>
        <path d="M-2 792h2v-7h-2v7zm6 0h2v-7H4v7z"/>
      </svg>
    );
  }
}

export default TwitchIcon;

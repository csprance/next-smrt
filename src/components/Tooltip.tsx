import * as React from 'react';
import { Tooltip } from 'react-lightweight-tooltip';
import { almostBlack } from '../../styles/colors';

type Props = {
  content: string;
};
type State = {};
class TooltipComponent extends React.Component<Props, State> {
  static defaultProps = {};

  render() {
    return (
      <Tooltip
        styles={{
          wrapper: {
            zIndex: 999,
            cursor: 'hand'
          },
          tooltip: {
            minWidth: '110px',
            borderRadius: '5px',
            pointerEvents: 'none',
            backgroundColor: almostBlack
          },
          content: {
            pointerEvents: 'none',
            backgroundColor: almostBlack
          },
          arrow: {
            position: 'absolute',
            width: '0',
            height: '0',
            bottom: '-5px',
            left: '50%',
            marginLeft: '-5px',
            borderLeft: 'solid transparent 5px',
            borderRight: 'solid transparent 5px',
            borderTop: `solid ${almostBlack} 5px`
          },
          gap: {
            pointerEvents: 'none'
          }
        }}
        content={this.props.content}
      >
        {this.props.children}
      </Tooltip>
    );
  }
}

export default TooltipComponent;

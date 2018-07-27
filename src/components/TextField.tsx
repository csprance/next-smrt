import * as React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Tooltip from 'rc-tooltip';

import {darkGray, white, lightGray, midGray, gray} from '../../styles/colors';
import HelpIcon from './icons/HelpIcon';

injectGlobal`
.rc-tooltip.rc-tooltip-zoom-enter,
.rc-tooltip.rc-tooltip-zoom-leave {
  display: block;
}
.rc-tooltip-zoom-enter,
.rc-tooltip-zoom-appear {
  opacity: 0;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
  animation-play-state: paused;
}
.rc-tooltip-zoom-leave {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
  animation-play-state: paused;
}
.rc-tooltip-zoom-enter.rc-tooltip-zoom-enter-active,
.rc-tooltip-zoom-appear.rc-tooltip-zoom-appear-active {
  animation-name: rcToolTipZoomIn;
  animation-play-state: running;
}
.rc-tooltip-zoom-leave.rc-tooltip-zoom-leave-active {
  animation-name: rcToolTipZoomOut;
  animation-play-state: running;
}
@keyframes rcToolTipZoomIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
}
@keyframes rcToolTipZoomOut {
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
}
.rc-tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  visibility: visible;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.9;
}
.rc-tooltip-hidden {
  display: none;
}
.rc-tooltip-placement-top,
.rc-tooltip-placement-topLeft,
.rc-tooltip-placement-topRight {
  padding: 5px 0 9px 0;
}
.rc-tooltip-placement-right,
.rc-tooltip-placement-rightTop,
.rc-tooltip-placement-rightBottom {
  padding: 0 5px 0 9px;
}
.rc-tooltip-placement-bottom,
.rc-tooltip-placement-bottomLeft,
.rc-tooltip-placement-bottomRight {
  padding: 9px 0 5px 0;
}
.rc-tooltip-placement-left,
.rc-tooltip-placement-leftTop,
.rc-tooltip-placement-leftBottom {
  padding: 0 9px 0 5px;
}
.rc-tooltip-inner {
  padding: 8px 10px;
  color: ${white};
  text-align: left;
  text-decoration: none;
  background-color: ${darkGray};
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  min-height: 34px;
}
.rc-tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.rc-tooltip-placement-top .rc-tooltip-arrow,
.rc-tooltip-placement-topLeft .rc-tooltip-arrow,
.rc-tooltip-placement-topRight .rc-tooltip-arrow {
  bottom: 4px;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: ${darkGray};
}
.rc-tooltip-placement-top .rc-tooltip-arrow {
  left: 50%;
}
.rc-tooltip-placement-topLeft .rc-tooltip-arrow {
  left: 15%;
}
.rc-tooltip-placement-topRight .rc-tooltip-arrow {
  right: 15%;
}
.rc-tooltip-placement-right .rc-tooltip-arrow,
.rc-tooltip-placement-rightTop .rc-tooltip-arrow,
.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
  left: 4px;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: ${darkGray};
}
.rc-tooltip-placement-right .rc-tooltip-arrow {
  top: 50%;
}
.rc-tooltip-placement-rightTop .rc-tooltip-arrow {
  top: 15%;
  margin-top: 0;
}
.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
  bottom: 15%;
}
.rc-tooltip-placement-left .rc-tooltip-arrow,
.rc-tooltip-placement-leftTop .rc-tooltip-arrow,
.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
  right: 4px;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: ${darkGray};
}
.rc-tooltip-placement-left .rc-tooltip-arrow {
  top: 50%;
}
.rc-tooltip-placement-leftTop .rc-tooltip-arrow {
  top: 15%;
  margin-top: 0;
}
.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
  bottom: 15%;
}
.rc-tooltip-placement-bottom .rc-tooltip-arrow,
.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,
.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
  top: 4px;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: ${darkGray};
}
.rc-tooltip-placement-bottom .rc-tooltip-arrow {
  left: 50%;
}
.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {
  left: 15%;
}
.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
  right: 15%;
}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  background: ${darkGray};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 200;
  outline: 0;
  padding: 7px;
  width: 100%;
  box-sizing: border-box;
  color: ${white};
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin: 0 0 5px;
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

type Props = {
  name: string;
  value: string;
  label: string;
  onChange: any;
  placeholder?: string;
  help?: any;
  toolTipLink?: string;
};
type State = {};
class TextField extends React.Component<Props, State> {
  static defaultProps = {
    placeholder: '',
    help: false,
    toolTipLink: '#'
  };

  render() {
    return (
      <Wrapper>
        <StyledLabel htmlFor={this.props.name}>
          <span>{this.props.label}</span>
          {this.props.help ? (
            <Tooltip placement={'right'} overlay={this.props.help}>
              <a
                target={'__blank'}
                href={this.props.toolTipLink}
                style={{
                  marginLeft: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <HelpIcon />
              </a>
            </Tooltip>
          ) : (
            ''
          )}
        </StyledLabel>
        <StyledInput
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          type="text"
          name={this.props.name}
          value={this.props.value}
        />
      </Wrapper>
    );
  }
}

export default TextField;

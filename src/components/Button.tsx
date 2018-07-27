import * as React from 'react';
import styled from 'styled-components';
import {brightGray, darkGray, gray, lightGray, midGray, orange, white} from '../../styles/colors';

export type Colors = {
  color: string;
  backgroundColor: string;
};
const StyledButton = styled.button`
  cursor: ${(props: any)=> !props.disabled ? 'pointer' : 'not-allowed'};
  background-color: ${(props: Colors) => props.backgroundColor} !important;
  color: ${(props: Colors) => props.color} !important;
  border: none;
  border-radius: 2px;
  font-size: 15px;
  height: 40px;
  font-weight: 200;
  text-transform: uppercase;
  align-items: center;
  display: flex;
  justify-content: center;
  width: ${(props: any) => props.width};
  transition-duration: 0.2s;
  & :focus {
    outline: 0;
  }
  & :hover {
    transition-duration: 0.2s;
    color: ${(props: Colors) => props.color} !important;
    background-color: ${(props: Colors) => props.backgroundColor} !important;
  }
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background: radial-gradient(circle, #000 10%, transparent 10.01%) no-repeat
      50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.2;
    transition: 0s;
  }
`;

type Props = {
  backgroundColor?: string; // Color
  hoverBackgroundColor?: string; // Color
  color?: string; // Color
  hoverColor?: string; // Color
  onClick?: () => void;
  width?: string;
  disabled?: boolean;
};
type State = {
  color: string; // Color
  backgroundColor: string; // Color
};
class Button extends React.Component<Props, State> {
  static defaultProps = {
    onClick: () => {},
    backgroundColor: orange,
    color: white,
    hoverColor: orange,
    hoverBackgroundColor: gray,
    width: '100px',
    disabled: true
  };
  state = {
    backgroundColor: orange,
    disabledBackgroundColor: brightGray,
    color: white
  };

  handleMouseEnter = () => {
    this.setState({
      backgroundColor: this.props.hoverBackgroundColor,
      color: this.props.hoverColor
    });
  };

  handleMouseLeave = () => {
    this.setState({
      backgroundColor: this.props.backgroundColor,
      color: this.props.color
    });
  };

  render() {
    return (
      <StyledButton
        disabled={this.props.disabled}
        width={this.props.width}
        backgroundColor={this.props.disabled ? this.state.disabledBackgroundColor :  this.state.backgroundColor}
        color={this.props.disabled ? lightGray : this.state.color}
        onClick={this.props.onClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;

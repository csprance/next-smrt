/** SideBar
 * project: eibot
 * author: Chris Sprance - csprance
 * description:
 */
import * as React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import HamburgerIcon from '@material-ui/icons/Menu';
import { facebookBlue } from '../../styles/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  position: static;
  width: 200px;
  height: 100vh;
  background-color: ${facebookBlue};
`;
export const MenuButton = () => (
  <Tooltip title={'Toggle Sidebar'}>
    <IconButton>
      <HamburgerIcon />
    </IconButton>
  </Tooltip>
);

type Props = {};
type State = {};
class SideBar extends React.Component<Props, State> {
  static defaultProps = {};

  render() {
    return (
      <Wrapper>
        <MenuButton />
        <MenuButton />
      </Wrapper>
    );
  }
}

export default SideBar;

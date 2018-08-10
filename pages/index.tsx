import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Provider } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { StaticPage } from './_page';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Next-SMRT
            </Typography>
          </Toolbar>
        </AppBar>
      </Provider>
    );
  }
}
export default withStyles(styles)(Index);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MuiAppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Logo from '../assets/images/logo.svg';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  appBar: {
    background: 'inherit',
  },
  toolBar: {
    paddingLeft: '0',
    paddingRight: '0',
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  logo: {
    marginLeft: '11px',
    fill: '#4c4c4c',
    height: '2.2em',
    width: '2.2em',
    margin: '0',
  },
};

const AppBar = ({ classes }) => (
  <div className={classes.root}>
    <MuiAppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Logo className={classes.logo} />
        <Typography variant="title" color="inherit" className={classes.flex}>
          24 Chevres
        </Typography>

        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  </div>
);

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);

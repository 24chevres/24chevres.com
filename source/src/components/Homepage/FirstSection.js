import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import SchoolIcon from '@material-ui/icons/School';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShareIcon from '@material-ui/icons/Share';

const styles = theme => ({
  header: {
    marginBottom: '2em',
  },
  intro: {
    textAlign: 'center',
    marginBottom: '0.7em',
    marginTop: '0.6em',
  },
  subIntro: {
    textAlign: 'center',
    margin: '0 auto',
  },
  important: {
    marginTop: '1.5em',
    marginBottom: '1em',
  },
  icon: {
    color: theme.palette.primary.contrastText,
    borderRadius: '20px',
    minWidth: '0',
    width: '40px',
  },
  wbIcon: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  shareIcon: {
    backgroundColor: theme.palette.tertiary.main,
    '&:hover': {
      backgroundColor: theme.palette.tertiary.dark,
    },
  },
  footer: {
    position: 'absolute',
    bottom: '0.3em',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const FirstSection = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="display1" gutterBottom className={classes.intro}>
      A community for greater good.
    </Typography>

    <Typography variant="subheading" gutterBottom className={classes.subIntro}>
      We encourage and help people to create awesome open-source projects!
    </Typography>

    <Grid container className={classes.important}>
      <Grid item xs={12}>
        <Typography variant="subheading" align="center">
          What's important for us
        </Typography>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs>
            <Button className={classes.icon} variant="raised" color="secondary">
              <ShareIcon />
            </Button>
          </Grid>
          <Grid item xs>
            <Typography variant="caption" gutterBottom align="center">
              Sharing
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs>
            <Button className={classes.icon} variant="raised" color="primary">
              <TagFacesIcon />
            </Button>
          </Grid>
          <Grid item xs>
            <Typography variant="caption" gutterBottom align="center">
              Fun
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs>
            <Button className={classNames(classes.icon, classes.wbIcon)} variant="raised">
              <SchoolIcon />
            </Button>
          </Grid>
          <Grid item xs>
            <Typography variant="caption" gutterBottom align="center">
              Learning
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs>
            <Button className={classNames(classes.icon, classes.shareIcon)} variant="raised">
              <WbIncandescentIcon />
            </Button>
          </Grid>
          <Grid item xs>
            <Typography variant="caption" gutterBottom align="center">
              Innovation
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <Grid container className={classes.footer} direction="column" justify="center" alignItems="center">
      <Grid item xs>
        <Button className={classes.moreInfo} color="secondary">More information</Button>
        </Grid>
      <Grid item xs>
        <ExpandMoreIcon />
      </Grid>
    </Grid>
  </div>
);

FirstSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FirstSection);

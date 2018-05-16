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
  },
  important: {
    marginTop: '1.5em',
    marginBottom: '1em',
  },
  icon: {
    borderRadius: '20px',
    minWidth: '0',
    width: '40px',
  },
});

const FirstSection = ({ classes }) => (
  <div>
    <Typography variant="display1" gutterBottom className={classes.intro}>
      A community for greater good.
    </Typography>

    <Typography variant="subheading" gutterBottom className={classes.subIntro}>
      We encourage and help people to create awesome open-source projects!
    </Typography>

    <Typography variant="subheading" align="center" className={classes.important}>
      What's important for us
    </Typography>

    <Grid container justify="center">
      <Grid item xs lg={1}>
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

      <Grid item xs lg={1}>
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

      <Grid item xs lg={1}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs>
            <Button className={classes.icon} variant="raised" color="primary">
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

      <Grid item xs lg={1}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs>
            <Button className={classes.icon} variant="raised" color="secondary">
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
  </div>
);

FirstSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FirstSection);

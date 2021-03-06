import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll';
import FirstSection from './FirstSection';
import background from '../../assets/images/goat-2216868_640.jpg';

const styles = {
  scrollSection: {
    marginTop: '70px',
    padding: '5px',
  },
  background: {
    position: 'absolute',
    backgroundImage: `url("${background}")`,
    backgroundSize: 'cover',
    opacity: '0.20',top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    zIndex: '-1',
  }
};

const Homepage = ({ classes }) => (
  <div>
    <ScrollContainer>
      <ScrollSection pageId={0}>
        <div className={classes.background}></div>
        <div className={classes.scrollSection}>
          <FirstSection />
        </div>
      </ScrollSection>
    </ScrollContainer>
  </div>
);

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homepage);

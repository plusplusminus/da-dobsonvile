import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Card, Copy, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText, ViewAll } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';


const Header = (props) => {

  const { children } = props;

  const styles = StyleSheet.create({
    header:{
      display: 'block',
      width: '100%',
      marginBottom: spacing[props.mb],
      paddingBottom: spacing[props.pb],
      borderBottomWidth: props.borderWidth,
      borderBottomColor: colors.Border,
      borderBottomStyle: 'solid',
    }
  });

  return (
    <header className={css(styles.header)}>
      { children }
    </header>
  )
}

Header.defaultProps = {
  mb: 'Space2',
  pb: 'Space1',
  borderWidth: 0,
}

Header.propTypes = {
  mb: PropTypes.string,
  pb: PropTypes.string,
  borderWidth: PropTypes.number,
};

export default Header;

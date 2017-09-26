import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Card, Copy, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText, ViewAll } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';


const AsideMenu = (props) => {

  const { children } = props;

  const styles = StyleSheet.create({
    asideMenu:{
      display: 'block',
      width: '100%',
      marginBottom: spacing.Space5,
    }
  });

  return (
    <nav className={css(styles.asideMenu)}>
      { children }
    </nav>
  )
}

AsideMenu.defaultProps = {
}

AsideMenu.propTypes = {
};

export default AsideMenu;

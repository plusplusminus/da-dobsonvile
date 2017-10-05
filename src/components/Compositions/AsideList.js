import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Card, Copy, Heading, HeadingMeta, HeadingSmall, HeadingSection, ViewAll } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';


const AsideList = (props) => {

  const { cta, children, heading } = props;

  const styles = StyleSheet.create({
    asideList:{
      display: 'block',
      width: '100%',
      marginBottom: spacing.space10,
    }
  });

  return (
    <nav className={css(styles.asideList)}>
      <Heading color={"red"} letterSpacing={"huge"} size={"tiny"} uppercase>{ heading }</Heading>
      { children }
      { cta }
    </nav>
  )
}

AsideList.defaultProps = {
  children: null,
  heading: null,
}

AsideList.propTypes = {
  children: PropTypes.array,
  heading: PropTypes.string,
};

export default AsideList;

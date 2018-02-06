import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Card, Copy, Heading, HeadingMeta, HeadingSmall, HeadingSection, ViewAll, MoreLink } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';


const AsideList = (props) => {

  const { cta, children, heading, title } = props;

  const styles = StyleSheet.create({
    asideList:{
      display: 'block',
      width: '100%',
      marginBottom: spacing.space9,
    }
  });

  return (
    <nav className={css(styles.asideList)}>
      { title &&
        <Heading color={"red"} tracking={"huge"} size={"tiny"} mb={"medium"} weight={"regular"} uppercase>
          { title }
        </Heading>
      }
      { children }
      { cta &&
        <MoreLink>{cta}</MoreLink>
      }
    </nav>
  )
}

AsideList.defaultProps = {
  children: null,
  title: null,
}

AsideList.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
};

export default AsideList;

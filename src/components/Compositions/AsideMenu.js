import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Card, Copy, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText, ViewAll } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';


const AsideMenu = (props) => {

  const { children, title } = props;

  const styles = StyleSheet.create({
    asideMenu:{
      display: 'block',
      width: '100%',
      marginBottom: spacing.space9,
    }
  });

  return (
    <div>
      { title &&
        <Heading color={"red"} tracking={"huge"} size={"tiny"} mb={"medium"} weight={"light"} uppercase>
          { title }
        </Heading>
      }
      <nav className={css(styles.asideMenu)}>
        { children }
      </nav>
    </div>
  )
}

AsideMenu.defaultProps = {
  title: null,
  children: null,
}

AsideMenu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AsideMenu;

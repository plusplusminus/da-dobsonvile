import React from 'react';
import PropTypes from 'prop-types';
import { flatten } from 'rambda'
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';

const styles = {
  sidebar: {
  },
  pl: {
    none: {
      paddingLeft: spacing.space0,
      '@media (max-width: 576px)' : {
        paddingLeft: '15px',
      }
    },
    medium: {
      paddingLeft: spacing.space9,
    },
  },
};

const Sidebar = (props) => {

  const { children, col, pl } = props;

  const baseStyles = StyleSheet.create({
    sidebar: {
      ...styles.sidebar,
      ...(pl && styles.pl[pl]),
    }
  });

  return (
    <aside className={`${css(baseStyles.sidebar)} ${col}`}>
      {children}
    </aside>
  );
}

Sidebar.defaultProps = {
  children: null,
  col: 'col',
  pl: "medium",
}

Sidebar.propTypes = {
  /** Contents of the Sidebar */
  children: PropTypes.node,
  /** Cols as per Bootstrap for layout */
  col: PropTypes.node,
  /** Padding left  */
  pl: PropTypes.oneOf([
    "none",
    "medium",
  ]),
};

Sidebar.styles = styles;

export default Sidebar;

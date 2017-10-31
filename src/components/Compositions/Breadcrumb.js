import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {Copy, Icon} from 'components';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';

const styles = {
  breadcrumb: {
    fontWeight: fontWeight.bold,
    display: 'block',
    ...fontStyles('13px','20px'),
  },
  mb: {
    small: {
      marginBottom: spacing.space1,
    },
    large: {
      marginBottom: spacing.space4,
    },
  },
};

const Breadcrumb = (props) => {

  const { children, mb } = props;

  const baseStyles = StyleSheet.create({
    breadcrumb: {
      ...styles.breadcrumb,
      ...(mb && styles.mb[mb]),
    }
  });

  return (
    <span className={css(baseStyles.breadcrumb)}>
      <Copy size="small" weight="medium" mb="none">
        {children}
        <Icon name={"angle-right"} />
      </Copy>
    </span>
  );
}

Breadcrumb.defaultProps = {
  children: null,
  mb: "small",
}

Breadcrumb.propTypes = {
  /** Margin bottom  */
  mb: PropTypes.oneOf([
    "small",
    "large",
  ]),
};

Breadcrumb.styles = styles;

export default Breadcrumb;

import React from 'react';
import PropTypes from 'prop-types';
import { flatten } from 'rambda'
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';

const styles = {
  base: {
    width: '100%',
    display: 'inline-block',
    borderTop: '1px solid',
  },

  mt: {
    none: {
      marginTop: spacing.space0,
    },
    small: {
      marginTop: spacing.space1,
    },
    medium: {
      marginTop: spacing.space2,
    },
    large: {
      marginTop: spacing.space4,
    },
  },

  mb: {
    none: {
      marginBottom: spacing.space0,
    },
    small: {
      marginBottom: spacing.space1,
    },
    medium: {
      marginBottom: spacing.space2,
    },
    large: {
      marginBottom: spacing.space4,
    },
  },

  color: {
    base: {
      borderColor: colors.borderBase,
    },
    light: {
      borderColor: colors.borderLight,
    },
    white: {
      borderColor: colors.borderWhite,
    },
    whiteO: {
      borderColor: colors.borderWhiteO,
    },
  },
};

const Border = (props) => {

  const { color, mb, mt } = props;

  const baseStyles = StyleSheet.create({
    border: {
      ...styles.base,
      ...(mb && styles.mb[mb]),
      ...(mt && styles.mt[mt]),
      ...(color && styles.color[color]),
    }
  });

  return (
    <span className={css(baseStyles.border)}></span>
  );
}

Border.defaultProps = {
  color: "base",
  mb: "medium",
  mt: "medium",
}

Border.propTypes = {
  /** The Border color */
  color: PropTypes.oneOf([
    "base",
    "light",
    "white",
    "whiteO"
  ]),
  /** Margin bottom  */
  mb: PropTypes.oneOf([
    "none",
    "tiny",
    "small",
    "medium",
    "large",
  ]),
  /** Margin top  */
  mt: PropTypes.oneOf([
    "none",
    "tiny",
    "small",
    "medium",
    "large",
  ]),
};

Border.styles = styles;

export default Border;

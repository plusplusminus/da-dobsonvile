import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { colors, fonts, fontStyles, icons, spacing } from 'common/styles/variables';


const styles = {
  container:{
    base: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    mb: {
      large: {
        marginBottom: spacing.space3,
        '@media (min-width: 992px)': {
          marginBottom: spacing.space6,
        }
      },
      huge: {
        marginBottom: spacing.space5,
        '@media (min-width: 992px)': {
          marginBottom: spacing.space9,
        }
      },
    },
  },

  lines:{
    base:{
      position: 'relative',
    },
    line:{
      width: spacing.space10,
      content:'""',
      height:'1px',
      position: 'absolute',
      top: '50%',
    },
    color: {
      base: {
        backgroundColor: colors.textBase,
      },
      blue: {
        backgroundColor: colors.textBlue,
      },
      red: {
        backgroundColor: colors.textRed,
      },
      white: {
        backgroundColor: colors.textWhite,
      },
    },
   },
  }


const HeadingLines = (props) => {

  const { children, lines, lineLeft, container, lineRight, color, mb } = props;

  const baseStyles = StyleSheet.create({
    container:{
      ...styles.container.base,
      ...(mb && styles.container.mb[mb]),
    },
    lineLeft:{
      ...styles.lines.base,
      ...(lineLeft && styles.lines.lineLeft),
      ':before': {
        ...styles.lines.line,
        ...(color && styles.lines.color[color]),
        right: spacing.space4,
      }
    },
    lineRight:{
      ...styles.lines.base,
      ...(lineRight && styles.lines.lineRight),
      ':after': {
        ...styles.lines.line,
        ...(color && styles.lines.color[color]),
        left: spacing.space4,
      }
    },
  });

  return (
    <span className={css(baseStyles.container)}>
      { lineLeft && <span className={css(baseStyles.lineLeft)}></span> }
        { children }
      { lineRight && <span className={css(baseStyles.lineRight)}></span> }
    </span>
  )
}

HeadingLines.defaultProps = {
  children: null,
  color: 'base',
  lineLeft: false,
  lineRight: false,
  mb: 'none',
};

HeadingLines.propTypes = {
  /** Children getting wraped by lines */
  children: PropTypes.node.isRequired,
  /** Color of lines - mimic color of Heading Component */
  color: PropTypes.oneOf([
    "blue",
    "red",
    "green",
    "yellow",
    "white",
  ]),
  /** Add right line */
  lineLeft: PropTypes.bool,
  /** Add left line */
  lineRight: PropTypes.bool,
  /** Margin bottom of container - mimic mb of Heading Component */
  mb: PropTypes.oneOf([
    "large",
    "huge",
  ]),
};

export default HeadingLines;

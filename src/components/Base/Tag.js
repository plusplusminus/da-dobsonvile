import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Icon } from 'components';
import { colors, fonts, fontStyles, icons, spacing } from 'common/styles/variables';


const styles = {
  tag:{
    base:{
      fontFamily: fonts.sans,
      position: 'relative',
      display: 'inline-block',
      border: '1px solid',
      marginRight: spacing.space1,
      marginBottom: spacing.space1,
      borderRadius: spacing.space05,
      padding: spacing.space1,
      paddingRight: spacing.space1,
      ...fontStyles('13px','16px'),
    },
    close:{
      paddingRight: spacing.space4,
    },
    color : {
      white:{
        borderColor: colors.borderBase,
        backgroundColor: colors.brandWhite,
      },
      blue:{
        borderColor: colors.brandBlue,
        backgroundColor: colors.brandBlue,
      },
      green:{
        borderColor: colors.brandGreen,
        backgroundColor: colors.brandGreen,
      },
      red:{
        borderColor: colors.brandRed,
        backgroundColor: colors.brandRed,
      },
      yellow:{
        borderColor: colors.brandYellow,
        backgroundColor: colors.brandYellow,
      },
    },
    hover: {
      ':hover': {
        cursor: 'pointer',
      }
    },
    label:{
      borderBottom: '1px solid transparent',
      hover : {
        ':hover': {
          borderBottom: '1px solid',
        },
      },
      color: {
        base: {
          color: colors.textLightO,
        },
        white: {
          color: colors.textBase,
        },
      },
    },
  },
  close:{
    base: {
      position: 'absolute',
      top: spacing.space1,
      right: spacing.space0,
      ...fontStyles('22px','18px'),
    },
    color: {
      base:{
        color: colors.textLightO,
      },
      white: {
        color: colors.textBase,
      },
    },
  },
};

const Tag = (props) => {

  const { children, color, close, hover } = props;

  const baseStyles = StyleSheet.create({
    tag: {
      ...styles.tag.base,
      ...(close && styles.tag.close),
      ...(color && styles.tag.color[color]),
      ...(hover && styles.tag.hover),
    },
    label: {
      ...styles.tag.label.color.base,
      ...(color === 'white' ? styles.tag.label.color[color] : null),
      ...(hover && styles.tag.label.hover),
    },
    close: {
      ...styles.close.base,
      ...styles.close.color.base,
      ...(color === 'white' ? styles.close.color[color] : null),
    }
  });

  return (
    <span className={css(baseStyles.tag)}>
      { children &&
        <span className={css(baseStyles.label)}>{ children }</span>
      }
      { close &&
        <div className={`${css(baseStyles.close)}`}><Icon name={icons.close}/></div>
      }
    </span>
  )
}

Tag.defaultProps = {
  close: false,
  color: 'white',
  hover: true,
}

Tag.propTypes = {
  /** Should be replaced with onClick logic */
  close: PropTypes.bool,
  /** Whether or not to change the style on hover */
  hover: PropTypes.bool,
  /** Color options */
  color: PropTypes.oneOf([
    "white",
    "blue",
    "green",
    "red",
    "yellow",
  ]),
};


export default Tag;

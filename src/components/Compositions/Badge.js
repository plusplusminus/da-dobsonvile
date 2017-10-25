import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';
import { Heading, Icon, Copy } from 'components';
import {rgba} from '../../utils/helpers'

const styles = {
  badge:{
    base:{
      paddingTop: spacing.space05,
      paddingRight: spacing.space2,
      paddingBottom: spacing.space05,
      paddingLeft: spacing.space2,
      borderRadius: spacing.space05,
      overflow: 'hidden',
      textTransform: 'uppercase',
      color: colors.white,
      display: 'inline-flex',
      alignItems: 'center',
    },
  },

  icon:{
    display: 'flex',
    alignItems: 'center',
  },
  status: {
    neutral: {
      backgroundColor: colors.brandWhite,
      color: colors.statusNeutral,
    },
    info: {
      backgroundColor: colors.statusInfo,
    },
    success: {
      backgroundColor: colors.statusSuccess,
    },
    warning: {
      backgroundColor: colors.statusWarning,
    },
    danger: {
      backgroundColor: colors.statusDanger,
    },
  },
};

  const Badge = ({ status, title, icon}) => {

  const baseStyles = StyleSheet.create({
    badge: {
      ...styles.badge.base,
      ...(status && styles.status[status]),
    },
    icon:{
      ...styles.icon,
    },
    title:{
      letterSpacing:'10px',
    },
  });

  return (
    <div className={css(baseStyles.badge)}>
      { icon &&
        <Icon
          ml={spacing.space0}
          mr={spacing.space1}
          color={ status === "neutral" ? colors.textLight : colors.textWhite }
          fs={"14px"}
          lh={"14px"}
          name={icon}
        />
      }
      <Copy
        size={"tiny"}
        color={ status === "neutral" ? "light" : "white" }
        mb={"none"}
        override={{letterSpacing:letterSpacing.small}}
      >
        {title}
      </Copy>
    </div>
  )
}

Badge.defaultProps = {
  title: "Secured",
  icon: "lock",
  status: "info",
}

Badge.propTypes = {
  /** Icon for the Badge */
  icon: PropTypes.string,
  /** Title of the Badge */
  title: PropTypes.string.isRequired,
  /** Status of Badge to indicate color */
  status: PropTypes.oneOf([
    "danger",
    "info",
    "neutral",
    "success",
    "warning",
  ]).isRequired,
}

export default Badge;

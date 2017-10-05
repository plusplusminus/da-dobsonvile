import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { colors, fonts, fontWeight, letterSpacing, timing } from "common/styles/variables";
import { Icon } from "components"

const hoverStyles = {
  base: {
    textDecoration: "none",
  },

  blue: {
    color: colors.brandBlueHover,
  },

  green: {
    color: colors.brandGreenHover,
  },

  red: {
    color: colors.brandRedHover,
  },

  yellow: {
    color: colors.brandYellowHover,
  },

  white: {
    color: colors.brandWhite,
  },
};

const styles = {
  container: {
    base: {
      backgroundColor: colors.baseTransparent,
      border: 0,
      display: "inline-block",
      fontFamily: fonts.sans,
      fontSize: "13px",
      fontWeight: fontWeight.regular,
      lineHeight: 1,
      padding: 0,
      letterSpacing: letterSpacing.base,
      textDecoration: "none",
      transition: `color ${timing.fast} ease-in-out`,
    },

    color: {
      blue: {
        color: colors.brandBlue,

        ":hover": hoverStyles.blue,
        ":focus": hoverStyles.blue,
        ":active": hoverStyles.blue,
      },

      red: {
        color: colors.brandRed,

        ":hover": hoverStyles.red,
        ":focus": hoverStyles.red,
        ":active": hoverStyles.red,
      },

      green: {
        color: colors.brandGreen,

        ":hover": hoverStyles.green,
        ":focus": hoverStyles.green,
        ":active": hoverStyles.green,
      },

      yellow: {
        color: colors.brandYellow,

        ":hover": hoverStyles.yellow,
        ":focus": hoverStyles.yellow,
        ":active": hoverStyles.yellow,
      },

      white: {
        color: colors.brandWhite,

        ":hover": hoverStyles.white,
        ":focus": hoverStyles.white,
        ":active": hoverStyles.white,
      },
    },

    uppercase: {
      textTransform: "uppercase",
    },

    size: {
      small: {
        fontSize: "11px",
      },
      large: {
        fontSize: "14px",
      },
    },
  },

  icon: {
    base: {
      position: "relative",
      verticalAlign: "baseline",
      color: "inherit",
    }
  },
}

const MoreLink = (props) => {

  const { href, size, children, onClick, uppercase, color, hideIcon, isNested, style, arrowDirection, target } = props

  let Element = "";

  if (isNested) {
    Element = "span";
  } else if (href) {
    Element = "a";
  } else {
    Element = "button";
  }

  const baseStyles = StyleSheet.create({
    base: {
      ...styles.container.base,
      ...(color && styles.container.color[color]),
      ...(uppercase && styles.container.uppercase),
      ...(size && styles.container.size[size]),
      ...style,
    },
    icon: {
      ...styles.icon.base,
      ...(arrowDirection !== "left" && { marginLeft: ".5em" }),
      ...(arrowDirection === "left" && { marginRight: ".5em" }),
    },
  });

  return (
    <Element
      className={css(baseStyles.base)}
      href={href}
      target={target}
      onClick={onClick}
    >
      {!hideIcon && arrowDirection === "left" &&
        <Icon name={`angle-${arrowDirection}`} style={baseStyles.icon} />
      }

      {children}

      {!hideIcon && arrowDirection !== "left" &&
        <Icon name={`angle-${arrowDirection}`} style={baseStyles.icon} />
      }
    </Element>
  );
}

MoreLink.propTypes = {
  /** Direction of the arrow */
  arrowDirection: PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
  ]),
  /** Content for the link */
  children: PropTypes.node.isRequired,
  /** Color of the link */
  color: PropTypes.oneOf([
    "blue",
    "red",
    "green",
    "yellow",
  ]),
  /** If the arrow icon should be hidden */
  hideIcon: PropTypes.bool,
  /** Where the link should point to */
  href: PropTypes.string,
  /** If the link is nested within another link; makes the container a `span` */
  isNested: PropTypes.bool,
  /** Fires onclick function */
  onClick: PropTypes.func,
  /** Adjusts the font size */
  size: PropTypes.oneOf([
    "",
    "large",
    "small",
  ]),
  /** Specifies where to open the linked document */
  target: PropTypes.oneOf([
    "_blank",
    "_parent",
    "_self",
    "_top",
  ]),
  /** Applies textTransform CSS properties */
  uppercase: PropTypes.bool,
};

MoreLink.defaultProps = {
  arrowDirection: "right",
  color: "blue",
  hideIcon: false,
  href: null,
  isNested: false,
  onClick: null,
  size: "",
  target: null,
  uppercase: false,
};

MoreLink.styles = styles;

export default MoreLink;

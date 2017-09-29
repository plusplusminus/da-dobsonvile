import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { fonts, fontWeight, colors, timing } from "../../common/styles/variables";
import { Icon } from "components"

const hoverStyles = {
  base: {
    textDecoration: "none",
  },

  blue: {
    color: colors.PrimaryHover,
  },

  green: {
    color: colors.GreenHover,
  },

  red: {
    color: colors.RedHover,
  },

  yellow: {
    color: colors.YellowHover,
  },
};

const styles = {
  container: {
    base: {
      backgroundColor: "transparent",
      border: 0,
      display: "inline-block",
      fontFamily: fonts.Sans,
      fontSize: "13px",
      fontWeight: fontWeight.normal,
      lineHeight: 1,
      padding: 0,
      letterSpacing: "0.6px",
      textDecoration: "none",
      transition: `color ${timing.fast} ease-in-out`,
    },

    color: {
      blue: {
        color: colors.Blue,

        ":hover": hoverStyles.blue,
        ":focus": hoverStyles.blue,
        ":active": hoverStyles.blue,
      },

      red: {
        color: colors.Red,

        ":hover": hoverStyles.red,
        ":focus": hoverStyles.red,
        ":active": hoverStyles.red,
      },

      green: {
        color: colors.Green,

        ":hover": hoverStyles.green,
        ":focus": hoverStyles.green,
        ":active": hoverStyles.green,
      },

      yellow: {
        color: colors.Yellow,

        ":hover": hoverStyles.yellow,
        ":focus": hoverStyles.yellow,
        ":active": hoverStyles.yellow,
      },
    },

    caps: {
      fontWeight: 600,
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
};

/**
 * MoreLink component
 *
 * @usage
 * <MoreLink href="/foo">View all tours</MoreLink>
 */
function MoreLink({
  href,
  size,
  children,
  onClick,
  caps,
  color,
  hideIcon,
  isNested,
  style,
  arrowDirection,
  target,
}) {
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
      ...(caps && styles.container.caps),
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
  /**
   * Content for the link
   */
  children: PropTypes.node.isRequired,

  /**
   * Where the link should point to
   */
  href: PropTypes.string,

  /**
   * Color of the link
   */
  color: PropTypes.oneOf([
    "blue",
    "red",
    "green",
    "yellow",
  ]),

  /**
   * Adjusts the font size
   */
  size: PropTypes.oneOf([
    "",
    "small",
  ]),


  /**
   * Fires onclick function
   */
  onClick: PropTypes.func,

  /**
   * Applies textTransform and fontWeight CSS properties
   */
  caps: PropTypes.bool,

  /**
   * If the arrow icon should be hidden
   */
  hideIcon: PropTypes.bool,

  /**
   * If the link is nested within another link; makes the container a `span`
   */
  isNested: PropTypes.bool,

  /**
   * Object to add override or positioning styles
   */
  style: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),

  /**
   * Direction of the arrow
   */
  arrowDirection: PropTypes.oneOf([
    "up",
    "down",
    "left",
    "right",
  ]),

  /**
   * Specifies where to open the linked document
   */
  target: PropTypes.oneOf([
    "_blank",
    "_parent",
    "_self",
    "_top",
  ]),
};

MoreLink.defaultProps = {
  href: null,

  size: "",

  color: "blue",

  onClick: null,

  caps: false,

  hideIcon: false,

  isNested: false,

  style: {},

  arrowDirection: "right",

  target: null,
};

MoreLink.styles = styles;

export default MoreLink;

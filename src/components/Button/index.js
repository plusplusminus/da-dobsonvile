import React from "react";
import PropTypes from "prop-types";
import { colors, timing, fonts, fontWeight, letterSpacing } from "common/styles/variables";
import { Icon } from "components";
import { StyleSheet, css } from "aphrodite";

const hoverStyles = {
  base: {
    textDecoration: "none",
  },
  blue: {
    backgroundColor: colors.BlueHover,
    color: colors.White,
  },

  green: {
    backgroundColor: colors.GreenHover,
    color: colors.White,
  },

  red: {
    backgroundColor: colors.RedHover,
    color: colors.White,
  },

  yellow: {
    backgroundColor: colors.YellowHover,
    color: colors.White,
  },
};

const styles = {
  base: {
    appearance: "none",
    backfaceVisibility: "hidden",
    border: 0,
    borderRadius: 0,
    cursor: "pointer",
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
    paddingLeft: "30px",
    paddingRight: "30px",
    textAlign: "center",
    textDecoration: "none",
    fontFamily: fonts.Sans,
    fontWeight: fontWeight.Bold,
    letterSpacing: letterSpacing.Base,
    textTransform: "uppercase",
    transition: `color ${timing.default} ease-in-out,
      background-color ${timing.default} ease-in-out,
      opacity ${timing.default} ease-in-out`,
    verticalAlign: "middle",
    whiteSpace: "nowrap",

    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": hoverStyles.base,
  },
  color: {
    blue: {
      backgroundColor: colors.Blue,
      color: colors.White,

      ":hover": hoverStyles.blue,
      ":focus": hoverStyles.blue,
      ":active": hoverStyles.blue,
    },

    red: {
      backgroundColor: colors.Red,
      color: colors.White,

      ":hover": hoverStyles.red,
      ":focus": hoverStyles.red,
      ":active": hoverStyles.red,
    },

    green: {
      backgroundColor: colors.Green,
      color: colors.White,

      ":hover": hoverStyles.green,
      ":focus": hoverStyles.green,
      ":active": hoverStyles.green,
    },

    yellow: {
      backgroundColor: colors.Yellow,
      color: colors.White,

      ":hover": hoverStyles.yellow,
      ":focus": hoverStyles.yellow,
      ":active": hoverStyles.yellow,
    },
  },

  outline: {
    red: {
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: colors.Red,
      color: colors.Red,

      ":hover": hoverStyles.red,
      ":focus": hoverStyles.red,
      ":active": hoverStyles.red,
    },

    blue: {
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: colors.Blue,
      color: colors.Blue,

      ":hover": hoverStyles.blue,
      ":focus": hoverStyles.blue,
      ":active": hoverStyles.blue,
    },

    green: {
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: colors.Green,
      color: colors.Green,

      ":hover": hoverStyles.green,
      ":focus": hoverStyles.green,
      ":active": hoverStyles.green,
    },

    yellow: {
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: colors.Yellow,
      color: colors.Yellow,

      ":hover": hoverStyles.yellow,
      ":focus": hoverStyles.yellow,
      ":active": hoverStyles.yellow,
    },
  },

  size: {
    tiny: {
      fontSize: "9px",
      paddingBottom: `${9 / 9}em`,
      paddingLeft: `${19 / 9}em`,
      paddingRight: `${19 / 9}em`,
      paddingTop: `${9 / 9}em`,
    },
    small: {
      fontSize: "11px",
      paddingBottom: `${15 / 11}em`,
      paddingTop: `${15 / 11}em`,
    },
    medium: {
      fontSize: "13px",
      paddingBottom: `${21 / 13}em`,
      paddingTop: `${21 / 13}em`,
    },
    large: {
      fontSize: "15px",
      paddingBottom: `${23 / 15}em`,
      paddingTop: `${23 / 15}em`,
    },
    huge: {
      fontSize: "17px",
      paddingBottom: `${25 / 17}em`,
      paddingTop: `${25 / 17}em`,
    },
  },

  type: {
    rounded: {
      base: {
        borderRadius: "30px",
        paddingLeft: `${21 / 9}em`,
        paddingRight: `${21 / 9}em`,
        paddingTop: `${9 / 9}em`,
      },

      tiny: {
        paddingBottom: `${9 / 9}em`,
      },

      small: {
        paddingBottom: `${9 / 9}em`,
      },

      medium: {
        paddingBottom: `${9 / 9}em`,
      },

      large: {
        paddingBottom: `${9 / 9}em`,
      },

      huge: {
        paddingBottom: `${9 / 9}em`,
      },
    },
    full: {
      justifyContent: 'center',
      width: "100%",
    },
  },

  disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
};

function Button({
  href,
  children,
  onClick,
  color,
  size,
  rounded,
  outline,
  full,
  disabled,
  customStyles,
  iconBefore,
  iconAfter
})
{
  const Element = href ? "a" : "button";
  const role = Element === "a" ? "button" : null;

  const style = [
    styles.base,
    color && styles.color[color],
    size && styles.size[size],
    rounded && styles.type.rounded.base,
    rounded && styles.type.rounded[size],
    outline && styles.outline[color],
    full && styles.type.full,
    customStyles,
    disabled && styles.disabled,
  ];

  const temp = StyleSheet.create({
    button: style.reduce((result, item) => {
      if (item) {
        return {
          ...result,
          ...item,
        };
      }
      return result;
    }, {}),
  });

  return (
    <Element
      className={css(temp.button)}
      href={href}
      onClick={onClick}
      role={role}
      disabled={disabled}
    >
      {iconBefore &&
        <Icon name={iconBefore}/>
      }
      {children &&
        <span>{children}</span>
      }
      {iconAfter &&
        <Icon name={iconAfter}/>
      }
    </Element>
  );
}

Button.defaultProps = {
  href: null,
  onClick: null,
  color: "blue",
  size: "medium",
  rounded: true,
  full: false,
  children: "Button",
  disabled: false,
  customStyles: null,
  iconBefore: null,
  iconAfter: null,
};

Button.propTypes = {
  /** Pass an href prop to make the button an `a` element instead of a `button` */
  href: PropTypes.string,
  /** Content for the button */
  children: PropTypes.node.isRequired,
  /** Function to run when the button is clicked */
  onClick: PropTypes.func,
  /** Color of the button */
  color: PropTypes.oneOf([
    "blue",
    "red",
    "green",
    "yellow",
  ]),
  /** Size of the button */
  size: PropTypes.oneOf([
    "tiny",
    "small",
    "medium",
    "large",
    "huge",
  ]),
  /** Use a rounded button */
  rounded: PropTypes.bool,
  /** Use a outline button */
  outline: PropTypes.bool,
  /** Allow button to span available width */
  full: PropTypes.bool,
  /** Special styles passed in props */
  customStyles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
  /** Disable button */
  disabled: PropTypes.bool,
  /** Icon name to appear before text */
  iconBefore: PropTypes.string,
  /** Icon name to appear after text */
  iconAfter: PropTypes.string,
};

Button.styles = styles;

export default Button;

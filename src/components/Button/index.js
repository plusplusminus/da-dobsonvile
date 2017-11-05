import React from "react";
import PropTypes from "prop-types";
import { colors, timing, fonts, fontWeight, letterSpacing } from "common/styles/variables";
import {rgba} from '../../utils/helpers';
import { Icon } from "components";
import { StyleSheet, css } from "aphrodite";

const hoverStyles = {
  base: {
    textDecoration: "none",
  },

  blue: {
    backgroundColor: colors.brandBlueHover,
    color: colors.baseWhite,
  },

  white: {
    backgroundColor: colors.baseWhite,
    color: colors.brandBlue,
  },

  green: {
    backgroundColor: colors.brandGreenHover,
    color: colors.baseWhite,
  },

  red: {
    backgroundColor: colors.brandRedHover,
    color: colors.baseWhite,
  },

  yellow: {
    backgroundColor: colors.brandYellowHover,
    color: colors.baseWhite,
  },
};

const styles = {
  base: {
    position: 'relative',
    appearance: "none",
    backfaceVisibility: "hidden",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: colors.borderBase,
    borderRadius: 0,
    cursor: "pointer",
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
    paddingLeft: "30px",
    paddingRight: "30px",
    textAlign: "center",
    textDecoration: "none",
    fontFamily: fonts.sans,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing.base,
    textTransform: "uppercase",
    transition: `color ${timing.base} ease-in-out,
      background-color ${timing.base} ease-in-out,
      opacity ${timing.base} ease-in-out`,
    verticalAlign: "middle",
    whiteSpace: "nowrap",

    ":hover": hoverStyles.base,
    ":active": hoverStyles.base,
    ":focus": hoverStyles.base,
  },
  color: {
    blue: {
      button:{
        backgroundColor: colors.brandBlue,
        color: colors.baseWhite,
        borderColor: colors.brandBlue,

        ":hover": hoverStyles.blue,
        ":focus": hoverStyles.blue,
        ":active": hoverStyles.blue,
      },
      icon:{
        backgroundColor: rgba(colors.brandWhite, 0.3),
        color: colors.baseWhite,
      }
    },

    white: {
      button:{
        backgroundColor: colors.baseWhite,
        color: colors.brandBlue,
        borderColor: colors.baseWhite,

        ":hover": hoverStyles.blue,
        ":focus": hoverStyles.blue,
        ":active": hoverStyles.blue,
      },
      icon:{
        backgroundColor: rgba(colors.brandBlue, 1),
        color: colors.baseWhite,
      },
    },

    red: {
      button:{
        backgroundColor: colors.brandRed,
        color: colors.baseWhite,
        borderColor: colors.brandRed,

        ":hover": hoverStyles.red,
        ":focus": hoverStyles.red,
        ":active": hoverStyles.red,
      },
      icon:{
        backgroundColor: rgba(colors.brandWhite, 0.3),
        color: colors.baseWhite,
      },
    },

    green: {
      button:{
        backgroundColor: colors.brandGreen,
        color: colors.baseWhite,
        borderColor: colors.brandGreen,

        ":hover": hoverStyles.green,
        ":focus": hoverStyles.green,
        ":active": hoverStyles.green,
      },
      icon:{
        backgroundColor: rgba(colors.brandWhite, 0.3),
        color: colors.baseWhite,
      },
    },

    yellow: {
      button:{
        backgroundColor: colors.brandYellow,
        color: colors.baseWhite,
        borderColor: colors.brandYellow,

        ":hover": hoverStyles.yellow,
        ":focus": hoverStyles.yellow,
        ":active": hoverStyles.yellow,
      },
      icon:{
        backgroundColor: rgba(colors.brandWhite, 0.3),
        color: colors.baseWhite,
      }

    },
  },

  outline: {
    red: {
      button:{
        backgroundColor: colors.baseTransparent,
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: colors.brandRed,
        color: colors.brandRed,

        ":hover": hoverStyles.red,
        ":focus": hoverStyles.red,
        ":active": hoverStyles.red,
      },
      icon:{
        backgroundColor: colors.brandRed,
        color: colors.brandWhite,
      }
    },

    blue: {
      button:{
        backgroundColor: colors.baseTransparent,
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: colors.brandBlue,
        color: colors.brandBlue,

        ":hover": hoverStyles.blue,
        ":focus": hoverStyles.blue,
        ":active": hoverStyles.blue,
      },
      icon:{
        backgroundColor: colors.brandBlue,
        color: colors.brandWhite,
      },
    },

    green: {
      button:{
        backgroundColor: colors.baseTransparent,
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: colors.brandGreen,
        color: colors.brandGreen,

        ":hover": hoverStyles.green,
        ":focus": hoverStyles.green,
        ":active": hoverStyles.green,
      },
      icon:{
        backgroundColor: colors.brandGreen,
        color: colors.brandWhite,
      },

    },

    yellow: {
      button:{
        backgroundColor: colors.baseTransparent,
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: colors.brandYellow,
        color: colors.brandYellow,

        ":hover": hoverStyles.yellow,
        ":focus": hoverStyles.yellow,
        ":active": hoverStyles.yellow,
      },
      icon:{
        backgroundColor: colors.brandYellow,
        color: colors.brandWhite,
      },
    },

    white: {
      button:{
        backgroundColor: colors.baseTransparent,
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: colors.baseWhite,
        color: colors.baseWhite,

        ":hover": hoverStyles.white,
        ":focus": hoverStyles.white,
        ":active": hoverStyles.white,
      },
      icon:{
        backgroundColor: colors.baseWhite,
        color: colors.brandBlue,
      },

    },
  },

  size: {
    small: {
      button:{
        base:{
          fontSize: "12px",
          paddingBottom: '12px',
          paddingTop: '12px',
          paddingLeft: "30px",
          paddingRight: "30px",
        },
        iconBefore:{
          paddingLeft: "55px"
        },
        iconAfter:{
          paddingRight: "55px"
        },
      },
      icon:{
        fontSize: "16px",
        width: '32px',
        padding: '8px',
      },
    },
    medium: {
      button:{
        base:{
          fontSize: "12px",
          paddingBottom: "15px",
          paddingTop: "15px",
          paddingLeft: "40px",
          paddingRight: "40px",
        },
        iconBefore:{
          paddingLeft: "60px"
        },
        iconAfter:{
          paddingRight: "60px"
        },
      },
      icon:{
        fontSize: '18px',
        width: '38px',
        padding: '10px',
      }
    },
    large: {
      button:{
        base:{
          fontSize: "12px",
          paddingBottom: '20px',
          paddingTop: '20px',
          paddingLeft: "50px",
          paddingRight: "50px",
        },
        iconBefore:{
          paddingLeft: "80px"
        },
        iconAfter:{
          paddingRight: "80px"
        },
      },
      icon:{
        fontSize: '20px',
        width: '48px',
        padding: '14px',
      }
    },
  },

  type: {
    rounded: {
      base: {
        borderRadius: "30px",
      },
      small: {
        button:{
          base:{
            paddingBottom: "12px",
            paddingTop: "12px",
            paddingLeft: "30px",
            paddingRight: "30px",
          },
          iconBefore:{
            paddingLeft: "55px",
          },
          iconAfter:{
            paddingRight: "55px",
          },
        },
        icon:{
        },
      },
      medium: {
        button:{
          base:{
            paddingBottom: "15px",
            paddingTop: "15px",
            paddingLeft: "40px",
            paddingRight: "40px",
          },
          iconBefore:{
            paddingLeft: "60px",
          },
          iconAfter:{
            paddingRight: "60px",
          },
        },
        icon:{
        },
      },
      large: {
        button:{
          base:{
            paddingBottom: "20px",
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
          },
          iconBefore:{
            paddingLeft: "80px",
          },
          iconAfter:{
            paddingRight: "80px",
          },
        },
        icon:{
        },
      },
    },
    full: {
      justifyContent: 'center',
      width: "100%",
    },
  },

  variant: {
    center:{
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },

  disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  icon:{
    base:{
      position: 'absolute',
      borderRadius: '0%',
      margin: 0,
      border: '0px solid #fff',
      top: '2px',
    },
  },
  iconBefore:{
    left: '2px',
  },
  iconAfter:{
    right: '2px',
  },
};

const Button = (props) => {

  const { href, children, onClick, color, center, size, rounded, outline, full, disabled, customStyles, iconBefore, iconAfter, variant } = props;

  const Element = href ? "a" : "button";

  const role = Element === "a" ? "button" : null;

  const baseStyles = StyleSheet.create({
    button:{
      ...styles.base,
      ...(color && styles.color[color].button),
      ...(size && styles.size[size].button.base),
      ...(iconBefore && size && styles.size[size].button.iconBefore),
      ...(iconAfter && size && styles.size[size].button.iconAfter),
      ...(rounded && styles.type.rounded.base),
      ...(rounded && styles.type.rounded[size].button.base),
      ...(iconBefore && rounded && styles.type.rounded[size].button.iconBefore),
      ...(iconAfter && rounded && styles.type.rounded[size].button.iconAfter),
      ...(outline && styles.outline[color].button),
      ...(full && styles.type.full),
      ...(center && styles.variant.center),
      ...(customStyles && customStyles),
      ...(disabled && styles.disabled),
    },
    iconBefore:{
      ...styles.icon.base,
      ...(iconBefore && styles.iconBefore),
      ...(size && styles.size[size].icon),
      ...(color && styles.color[color].icon),
      ...(iconBefore && rounded && styles.type.rounded.base),
      ...(iconBefore && outline && styles.outline[color].icon),
    },
    iconAfter:{
      ...styles.icon.base,
      ...(iconAfter && styles.iconAfter),
      ...(size && styles.size[size].icon),
      ...(color && styles.color[color].icon),
      ...(iconAfter && rounded && styles.type.rounded.base),
      ...(iconAfter && outline && styles.outline[color].icon),
    }
  });

  return (
    <Element
      className={css(baseStyles.button)}
      href={href}
      onClick={onClick}
      role={role}
      disabled={disabled}
    >
      {iconBefore &&
        <Icon style={baseStyles.iconBefore} name={iconBefore}/>
      }
      {children &&
        <span>{children}</span>
      }
      {iconAfter &&
        <Icon style={baseStyles.iconAfter} name={iconAfter}/>
      }
    </Element>
  );
}

Button.defaultProps = {
  href: null,
  onClick: null,
  color: "blue",
  center: false,
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
  /** Should button be aligned center */
  center: PropTypes.bool,
  /** Function to run when the button is clicked */
  onClick: PropTypes.func,
  /** Color of the button */
  color: PropTypes.oneOf([
    "blue",
    "red",
    "green",
    "yellow",
    "white",
  ]),
  /** Size of the button */
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
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

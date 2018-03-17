import React from "react";
import PropTypes from "prop-types";
import Media from "react-media";
import { StyleSheet, css } from "aphrodite";
import { Button, Copy, Heading, Image, MoreLink } from "components";
import { colors, fontWeight, spacing } from "common/styles/variables";
import { default as ButtonTest } from "components/Button";
import { rgba } from "../../utils/helpers";

const styles = {
  asideOverlay: {
    base: {
      borderRadius: spacing.space1,
      marginBottom: spacing.space4,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
  },
  withHeight: {
    paddingTop: spacing.space0,
    paddingBottom: spacing.space0,
    justifyContent: "center",
  },
  bg: {
    borderRadius: spacing.space1,
    paddingTop: spacing.space9,
    paddingRight: spacing.space2,
    paddingBottom: spacing.space9,
    paddingLeft: spacing.space2,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  mb: {
    none: {
      marginBottom: spacing.space0,
    },
    small: {
      marginBottom: spacing.space4,
    },
    large: {
      marginBottom: spacing.space9,
    },
  },
  color: {
    dark: {
      imageUrl: {
        backgroundColor: colors.bgDarkO,
      },
      base: {
        backgroundColor: colors.bgDark,
      },
    },
    blue: {
      imageUrl: {
        backgroundColor: rgba(colors.brandBlue, 0.9),
      },
      base: {
        backgroundColor: rgba(colors.brandBlue, 1),
      },
    },
    green: {
      imageUrl: {
        backgroundColor: rgba(colors.brandGreen, 0.9),
      },
      base: {
        backgroundColor: rgba(colors.brandGreen, 1),
      },
    },
    red: {
      imageUrl: {
        backgroundColor: rgba(colors.brandRed, 0.9),
      },
      base: {
        backgroundColor: rgba(colors.brandRed, 1),
      },
    },
    yellow: {
      imageUrl: {
        backgroundColor: rgba(colors.brandYellow, 0.9),
      },
      base: {
        backgroundColor: rgba(colors.brandYellow, 1),
      },
    },
  },
};

const AsideOverlay = (props) => {
  const { title, color, height, paragraph, cta, mb, imageUrl } = props;

  const baseStyles = StyleSheet.create({
    asideOverlay: {
      ...styles.asideOverlay.base,
      ...(mb && styles.mb[mb]),
    },
    bg: {
      ...styles.bg,
      ...(imageUrl && color && styles.color[color].imageUrl),
      ...(!imageUrl && color && styles.color[color].base),
      ...(height ? { ...styles.withHeight, height } : null),
    },
  });

  return (
    <aside className={css(baseStyles.asideOverlay)} style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}>
      <div className={css(baseStyles.bg)}>
        { title &&
        <Heading
          color={"white"}
          size={"large"}
          mb={"small"}
          align={"center"}
        >
          { title }
        </Heading>
        }

        { paragraph &&
          <Copy
            color={"white"}
            weight={"bold"}
            mb={"large"}
            center
            html={paragraph}
          />
        }

        { cta &&
          <ButtonTest
            color="white"
            center
          >
            { cta }
          </ButtonTest>
        }
      </div>
    </aside>
  );
};

AsideOverlay.defaultProps = {
  color: "dark",
  mb: "small",
  cta: "View All",
  paragraph: "Find out more about DAs delivery record",
  title: "Heading",
  height: null,
};

AsideOverlay.propTypes = {
  /** Button label */
  cta: PropTypes.string,
  /** Paragraph appearing below Title */
  paragraph: PropTypes.string,
  /** Title of Overlay */
  title: PropTypes.string,
  /** Background Color of Overlay Component */
  color: PropTypes.oneOf([
    "dark",
    "blue",
    "red",
    "green",
    "yellow",
  ]),
  /** Margin Below Overlay */
  mb: PropTypes.oneOf([
    "none",
    "small",
    "large",
  ]),
  height: PropTypes.string,
};

export default AsideOverlay;

import React from "react";
import PropTypes from "prop-types";
import Media from "react-media";
import { StyleSheet, css } from "aphrodite";
import { Button, Copy, Heading, Image, MoreLink } from "components";
import { colors, fontWeight, spacing } from "common/styles/variables";
import { default as ButtonTest } from "components/Button";
import { rgba } from "../../utils/helpers";

const styles = {
  asideSmall: {
    base: {
      borderRadius: spacing.space1,
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "row",
    },
    image: {
      maxWidth: "35%",
      marginRight: spacing.space2,
    },
    text: {
      paddingTop: spacing.space1,
    },

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
};

const AsideSmall = (props) => {
  const { title, height, cta, mb, imageUrl } = props;

  const baseStyles = StyleSheet.create({
    asideSmall: {
      ...styles.asideSmall.base,
      ...(mb && styles.mb[mb]),
    },
    image: {
      ...styles.asideSmall.image,
    },
    text: {
      ...styles.asideSmall.text,
    },
  });

  return (
    <aside className={css(baseStyles.asideSmall)}>
      {
        imageUrl && <div className={css(baseStyles.image)}>
          <Image rounded imageUrl={imageUrl} />
        </div>
      }

      <div className={css(baseStyles.text)}>
        { title &&
        <Heading
          color={"blue"}
          size={"large"}
        >
          { title }
        </Heading>
        }

        { cta &&
        <MoreLink href={cta}>
          { cta }
        </MoreLink>
        }
      </div>
    </aside>

  );
};

AsideSmall.defaultProps = {
  color: "dark",
  mb: "small",
  cta: "View All",
  paragraph: "Find out more about DAs delivery record",
  title: "Heading",
  height: null,
};

AsideSmall.propTypes = {
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

export default AsideSmall;

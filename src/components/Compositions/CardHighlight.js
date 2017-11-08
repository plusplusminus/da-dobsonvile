import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const createMarkup = (content) => ({ __html: `${content}` });

const styles = {
  container: {
    base:{
      display: 'inline-block',
      width: '100%',
      display: 'flex',
      borderRadius: spacing.space05,
      overflow: 'hidden',
      marginBottom: spacing.space4,
      flexDirection: 'row',
      '@media (max-width: 767px)': {
        flexDirection: 'column',
      }
    },
    col:{
      flexDirection: 'column'
    },
    row:{
      flexDirection: 'row',
      '@media (max-width: 767px)': {
        flexDirection: 'column'
      }
    }
  },
  wrapper: {
    base:{
      padding: spacing.space3,
      backgroundColor: colors.bgWhite,
      '@media (min-width: 768px)': {
        padding: spacing.space9,
      },
    },
    col:{
      width: '100%',
    },
    row:{
      width: '50%',
      '@media (max-width: 767px)': {
        width: '100%',
      }
    }
  },
  figure:{
    base:{
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      margin: 0,
    },
    row:{
      width: '50%',
      '@media (max-width: 767px)': {
        width: '100%',
        paddingBottom: '60%',
        order: -1,
      }
    },
    col:{
      width: '100%',
      paddingBottom: '60%',
      order: -1,
    }
  },
  paragraph:{
    marginBottom: spacing.space4,
  },
  bgColor: {
    white: {
      backgroundColor: colors.bgWhite,
      color: colors.textBase,
    },
    blue: {
      backgroundColor: colors.bgBlue,
    },
  },
};

const CardHighlight = ({ bgColor, title, url, imageUrl, meta, paragraph, children, col }) => {

  const baseStyles = StyleSheet.create({
    container: {
      ...styles.container.base,
      ...(styles.container.row),
      ...(col && styles.container.col),
    },
    wrapper: {
      ...styles.wrapper.base,
      ...(styles.wrapper.row),
      ...(col && styles.wrapper.col),
      ...(bgColor && styles.bgColor[bgColor]),
    },
    figure: {
      ...styles.figure.base,
      ...(styles.figure.row),
      ...(col && styles.figure.col),
    },
    paragraph: {
      ...styles.paragraph,
    },
  });

  return (
    <section className={css(baseStyles.container)}>
      <div className={css(baseStyles.wrapper)}>
        <header>
          <Heading
            level={3}
            color={ bgColor === "white" ? "blue" : "white"}
            size={"large"}
            mb={ meta === true ? "tiny" : "small"}
          >
            {title}
          </Heading>
          {
            meta && <Heading
              level={6}
              color={ bgColor === "white" ? "blue" : "white"}
              size={"tiny"}
              letterSpacing={"small"}
              weight={"medium"}
              tracking={"small"}
              mb={"small"}
            >
              {meta}
            </Heading>
          }
        </header>

        <div className={css(baseStyles.paragraph)}>
          <Copy
            isParent
            color={ bgColor === "white" ? null : "white"}
          >
            <p
              className={css(baseStyles.paragraph)}
              dangerouslySetInnerHTML={createMarkup(paragraph)}
            />
          </Copy>

          { children }
        </div>

      </div>

      <figure className={css(baseStyles.figure)} style={{backgroundImage:`url(${imageUrl})`}}></figure>

    </section>
  );
}

CardHighlight.defaultProps = {
  title: null,
  meta: null,
  url: null,
  col: null,
  imageUrl: null,
  paragraph: null,
  bgColor: "white",
};

CardHighlight.propTypes = {
  /** Background Color of Card */
  bgColor: PropTypes.string.isRequired,
  /** Title of Card */
  title: PropTypes.string.isRequired,
  /** Meta text of Card */
  meta: PropTypes.string,
  /** URL of Card */
  url: PropTypes.string,
  /** ImageURL of Card */
  imageUrl: PropTypes.string,
  /** Paragraph content of Card */
  paragraph: PropTypes.string,
  /** Is image and text below each other? */
  col: PropTypes.bool,
};

export default CardHighlight;

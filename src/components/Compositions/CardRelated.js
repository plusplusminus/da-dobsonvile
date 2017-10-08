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
      backgroundColor: colors.bgLight,
    },
    horizontal:{
      padding: spacing.space6,
    },
    vertical:{
      padding: spacing.space4,
    }
  },
  wrapper: {
    vertical: {
      width: '100%',
    },
    horizontal: {
      width: '60%',
    }
  },
  figure: {
    base: {
      margin: 0,
    },
    vertical:{
      float: 'none',
      marginLeft: '0',
      maxWidth: '100%',
      marginBottom: spacing.space3,
    },
    horizontal:{
      float: 'right',
      marginLeft: '5%',
      width: '30%',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
  },
};

const CardRelated = ({ title, url, imageUrl, paragraph, cta, vertical, horizontal }) => {

  const baseStyles = StyleSheet.create({
    container: {
      ...styles.container.base,
      ...(vertical && styles.container.vertical),
      ...(horizontal && styles.container.horizontal),
    },
    wrapper: {
      ...styles.wrapper,
    },
    figure: {
      ...styles.figure.base,
    },
    image: {
      ...styles.figure.image,
      ...(vertical && styles.figure.vertical),
      ...(horizontal && styles.figure.horizontal)
    }
  });

  return (
    <article className={css(baseStyles.container)}>
      { imageUrl &&
        <figure className={css(baseStyles.figure)}>
          <img src={imageUrl} alt="" className={css(baseStyles.image)} />
        </figure>
      }

      <div className={css(baseStyles.wrapper)}>
        <header>
          <Heading
            level={3}
            mb={"small"}
            size="small"
          >
            {title}
          </Heading>
        </header>

        <Copy isParent size={"small"}>
          <p
            className={css(baseStyles.paragraph)}
            dangerouslySetInnerHTML={createMarkup(paragraph)}
          />
        </Copy>

        <MoreLink href={url}>
          { cta }
        </MoreLink>
      </div>
    </article>
  );
}

CardRelated.propTypes = {
  /** Title of Card */
  title: PropTypes.string.isRequired,
  /** Paragraph content of Card */
  paragraph: PropTypes.string,
  /** URL of Card */
  url: PropTypes.string.isRequired,
  /** ImageURL of Card */
  imageUrl: PropTypes.string,
  /** Call to Action of Card */
  cta: PropTypes.string.isRequired,
  /** Is card vertically aligned */
  vertical: PropTypes.bool.isRequired,
  /** Is card horizontaly aligned */
  horizontal: PropTypes.bool.isRequired,
};

CardRelated.defaultProps = {
  title: null,
  url: null,
  imageUrl: null,
  paragraph: null,
  cta: null,
  vertical: true,
  horizontal: false,
};

export default CardRelated;

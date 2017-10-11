import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const createMarkup = (content) => ({ __html: `${content}` });

const styles = {
  container: {
    display: 'inline-block',
    width: '100%',
    marginBottom: spacing.space3,
  },
  figure: {
    base: {
      marginBottom: spacing.space3,
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
  },
};

const CardVideo = ({ title, url, imageUrl, paragraph, cta, featured, color }) => {

  const baseStyles = StyleSheet.create({
    container: {
      ...styles.container,
    },
    figure: {
      ...styles.figure.base,
    },
    image: {
      ...styles.figure.image,
    }
  });

  return (
    <article className={css(baseStyles.container)}>

      <figure className={css(baseStyles.figure)}>
        <img src={imageUrl} alt="" className={css(baseStyles.image)} />
      </figure>

      <header>
        { featured == true ?
          <Heading
            level={3}
            mb={"small"}
            size={"large"}
            color={color}
          >
            {title}
          </Heading>
          :
          <Heading
            level={3}
            mb={"small"}
            size={"small"}
            color={color}
          >
            {title}
          </Heading>
        }
      </header>

      { featured && paragraph &&
        <Copy
          isParent
          color={color}
        >
          <p
            className={css(baseStyles.paragraph)}
            dangerouslySetInnerHTML={createMarkup(paragraph)}
          />
        </Copy>
      }

      { featured && cta &&
        <MoreLink href={url} color={color}>
          { cta }
        </MoreLink>
      }

    </article>
  );
}

CardVideo.propTypes = {
  /** Title of Card */
  title: PropTypes.string.isRequired,
  /** Color of Headings and Copy of Card */
  color: PropTypes.string,
  /** Paragraph content of Card */
  paragraph: PropTypes.string,
  /** URL of Card */
  url: PropTypes.string.isRequired,
  /** ImageURL of Card */
  imageUrl: PropTypes.string,
  /** Call to Action of Card */
  cta: PropTypes.string.isRequired,
  /** Is card featured */
  featured: PropTypes.bool.isRequired,
  /** Color of Headings and Copy in card */
  featured: PropTypes.string,
};

CardVideo.defaultProps = {
  title: null,
  paragraph: null,
  url: null,
  imageUrl: null,
  cta: null,
  featured: false,
  color: "base",
};

export default CardVideo;

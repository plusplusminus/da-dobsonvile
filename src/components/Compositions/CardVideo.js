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

const CardVideo = ({ title, url, imageUrl, paragraph, cta, featured }) => {

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
          >
            {title}
          </Heading>
          :
          <Heading
            level={3}
            mb={"small"}
            size={"small"}
          >
            {title}
          </Heading>
        }
      </header>

      { featured && paragraph &&
        <Copy isParent>
          <p
            className={css(baseStyles.paragraph)}
            dangerouslySetInnerHTML={createMarkup(paragraph)}
          />
        </Copy>
      }

      { featured && cta &&
        <MoreLink href={url}>
          { cta }
        </MoreLink>
      }

    </article>
  );
}

CardVideo.propTypes = {
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
  /** Is card featured */
  featured: PropTypes.bool.isRequired,
};

CardVideo.defaultProps = {
  title: null,
  paragraph: null,
  url: null,
  imageUrl: null,
  cta: null,
  featured: false,
};

export default CardVideo;

import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

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

const CardVideo = ({ title, url, imageUrl, paragraph, cta, featured, color, children }) => {

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
      {
        imageUrl && <figure className={css(baseStyles.figure)}>
          <img src={imageUrl} alt="" className={css(baseStyles.image)} />
        </figure>
      }

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
          color={color}
          html={paragraph}
        />
      }

      { children }

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
  url: PropTypes.string,
  /** ImageURL of Card */
  imageUrl: PropTypes.string,
  /** Is card featured */
  featured: PropTypes.bool.isRequired,
};

CardVideo.defaultProps = {
  title: null,
  paragraph: null,
  url: null,
  imageUrl: null,
  featured: false,
  color: "base",
};

export default CardVideo;

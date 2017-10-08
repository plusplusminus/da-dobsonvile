import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const createMarkup = (content) => ({ __html: `${content}` });

const styles = {
  container: {
    display: "block",
    marginBottom: spacing.space4,
  },
  header: {},
  figure: {
    base: {
      float: 'left',
      marginRight: spacing.space2,
    },
    image: {
      display: "block",
      maxWidth: "100px",
    },
  },
};

const CardNews = ({ title, url, imageUrl, meta, paragraph, visual }) => {

  const baseStyles = StyleSheet.create({
    container: {
      ...styles.container,
    },
    header: {
      ...styles.header.base,
    },
    figure: {
      ...styles.figure.base,
    },
  });

  return (
    <article className={css(baseStyles.container)}>
      { imageUrl &&
        <figure className={css(baseStyles.figure)}>
          <img src={imageUrl} alt="" style={styles.figure.image} />
        </figure>
      }
      <header className={css(baseStyles.header)}>
        <Heading
          level={3}
          size={"small"}
          mb={"tiny"}
          tracking={"none"}
        >
          {title}
        </Heading>
        {
          meta && <Heading
            level={6}
            size={"tiny"}
            tracking={"none"}
            weight={"light"}
            uppercase
            override={styles.header.meta}
          >
            {meta}
          </Heading>
        }
      </header>
    </article>
  );
}

CardNews.propTypes = {
  title: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

CardNews.defaultProps = {
  title: null,
  meta: null,
  url: null,
  imageUrl: null,
  paragraph: null,
};

export default CardNews;

import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";
import {default as ButtonTest} from 'components/Button'


const createMarkup = (content) => ({ __html: `${content}` });

const styles = {
  card: {
    backgroundColor: colors.bgLight,
    display: 'flex',
    borderRadius: spacing.space1,
    overflow: 'hidden',
    flexDirection: 'column',
    // marginBottom: spacing.space5,
    height: '100%',
  },
  wrapper: {
    padding: spacing.space4,
    paddingBottom: spacing.space6,
  },
  figure: {
    base: {
      width: '100%',
      margin: 0,
    },
    image: {
      display: 'block',
      width: '100%',
      height: 'auto',
    },
  },
};

const CardProduct = ({ title, url, imageUrl, text, cta, small, children, meta }) => {

  const baseStyles = StyleSheet.create({
    card: {
      ...styles.card,
    },
    wrapper: {
      ...styles.wrapper,
    },
    figure: {
      ...styles.figure.base,
    },
    image: {
      ...styles.figure.image,
    }
  });

  return (
    <aside className={css(baseStyles.card)}>
      { imageUrl &&
        <figure className={css(baseStyles.figure)}>
          <img src={imageUrl} alt="" className={css(baseStyles.image)} />
        </figure>
      }
      <div className={css(baseStyles.wrapper)}>
        { meta &&
          <Heading
            level={6}
            color={"blue"}
            size={"tiny"}
            weight={"regular"}
            tracking={"small"}
            uppercase
          >
            { meta }
          </Heading>
        }

        { title &&
          <Heading
            color="blue"
            size={ !small ? "large" : "small"}
            mb="small"
          >
            { title }
          </Heading>
        }

        { text &&
          <Copy
            mb={ !small ? "large" : "medium"}
            size={ !small ? "medium" : "small"}
            html={text}
          />
        }

        { children && children }

      </div>
    </aside>
  );
}

CardProduct.propTypes = {
  /** Title of Card */
  title: PropTypes.string.isRequired,
  /** Paragraph content of Card */
  text: PropTypes.string,
  /** URL of Card */
  url: PropTypes.string.isRequired,
  /** ImageURL of Card */
  imageUrl: PropTypes.string,
  /** Meta text to appear above Title */
  meta: PropTypes.string,
  /** Is this a small version of the card? Used in narrow sidebar and below article */
  small: PropTypes.bool.isRequired,
};

CardProduct.defaultProps = {
  title: null,
  url: null,
  meta: null,
  imageUrl: null,
  text: null,
  cta: null,
  small: false,
};

export default CardProduct;

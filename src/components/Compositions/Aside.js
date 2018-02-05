import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";
import { default as ButtonTest } from 'components/Button'


const createMarkup = (content) => ({ __html: `${content}` });

const styles = {
  card: {
    base:{
      backgroundColor: colors.bgLight,
      display: 'flex',
    },
    horizontal:{
      paddingTop: spacing.space4,
      borderRadius: spacing.space1,
      overflow: 'hidden',
      flexDirection: 'column',
      marginBottom: spacing.space5,
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        paddingTop: spacing.space4,
        paddingBottom: spacing.space6,
        borderRadius: spacing.space0,
        marginBottom: spacing.space0,
      }
    },
    vertical:{
      borderRadius: spacing.space1,
      overflow: 'hidden',
      flexDirection: 'column',
      marginBottom: spacing.space5,
    }
  },
  wrapper: {
    base:{
    },
    vertical: {
      padding: spacing.space4,
      paddingBottom: spacing.space6,
    },
    horizontal: {
      paddingTop: spacing.space4,
      paddingBottom: spacing.space6,
      '@media (min-width: 768px)': {
        paddingTop: spacing.space0,
        paddingBottom: spacing.space0,
      }
    }
  },
  figure: {
    base: {
      margin: 0,
    },
    vertical:{
      width: '100%',
    },
    horizontal:{
      width: '100%',
      '@media (min-width: 768px)': {
        marginLeft: '5%',
        order: '1',
      }
    },
    image: {
      display: 'block',
      width: '100%',
      height: 'auto',
    },
  },
};

const Aside = ({ title, url, imageUrl, paragraph, cta, vertical, horizontal, small, children, meta }) => {

  const baseStyles = StyleSheet.create({
    card: {
      ...styles.card.base,
      ...(vertical && styles.card.vertical),
      ...(horizontal && styles.card.horizontal),
    },
    wrapper: {
      ...styles.wrapper.base,
      ...(horizontal && styles.wrapper.horizontal),
      ...(vertical && styles.wrapper.vertical),
    },
    figure: {
      ...styles.figure.base,
      ...(horizontal && styles.figure.horizontal),
      ...(vertical && styles.figure.vertical),
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

        { paragraph &&
          <Copy
            mb={"large"}
            size={"medium"}
            html={ paragraph }
          />
        }

        { children && children }

        { cta && !small &&
          <ButtonTest color={"blue"}>
            { cta }
          </ButtonTest>
        }
        { cta && small &&
          <MoreLink color={"blue"}>
            { cta }
          </MoreLink>
        }
      </div>
    </aside>
  );
}

Aside.propTypes = {
  /** Title of Card */
  title: PropTypes.string.isRequired,
  /** Paragraph content of Card */
  paragraph: PropTypes.string,
  /** URL of Card */
  url: PropTypes.string.isRequired,
  /** ImageURL of Card */
  imageUrl: PropTypes.string,
  /** Meta text to appear above Title */
  meta: PropTypes.string,
  /** Call to Action of Card */
  cta: PropTypes.string.isRequired,
  /** Is card vertically aligned */
  vertical: PropTypes.bool.isRequired,
  /** Is card horizontaly aligned */
  horizontal: PropTypes.bool.isRequired,
  /** Is this a small version of the card? Used in narrow sidebar and below article */
  small: PropTypes.bool.isRequired,
};

Aside.defaultProps = {
  title: null,
  url: null,
  meta: null,
  imageUrl: null,
  paragraph: null,
  cta: null,
  vertical: false,
  horizontal: false,
  small: false,
};

export default Aside;

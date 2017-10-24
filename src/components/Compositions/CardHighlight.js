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
    display: 'flex',
    borderRadius: spacing.space05,
    overflow: 'hidden',
    marginBottom: spacing.space4,
  },
  wrapper: {
    padding: spacing.space9,
    backgroundColor: colors.bgWhite,
    width: '50%',
  },
  figure:{
    width: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    margin: 0,
  },
};

const CardHighlight = ({ title, url, imageUrl, meta, paragraph, cta }) => {

  const baseStyles = StyleSheet.create({
    container: {
      ...styles.container,
    },
    wrapper: {
      ...styles.wrapper,
    },
    figure: {
      ...styles.figure,
    },
  });

  return (
    <section className={css(baseStyles.container)}>
      <div className={css(baseStyles.wrapper)}>
        <header>
          <Heading
            level={3}
            color={"blue"}
            size={"large"}
            mb={"tiny"}
          >
            {title}
          </Heading>
          {
            meta && <Heading
              level={6}
              color={"blue"}
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
          <Copy isParent>
            <p
              className={css(baseStyles.paragraph)}
              dangerouslySetInnerHTML={createMarkup(paragraph)}
            />
          </Copy>

          { cta &&
            <MoreLink href={url} style={styles.moreLink}>
              { cta }
            </MoreLink>
          }
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
  imageUrl: null,
  paragraph: null,
  cta: null,
};

CardHighlight.propTypes = {
  /** Title of Card */
  title: PropTypes.string.isRequired,
  /** Meta text of Card */
  meta: PropTypes.string.isRequired,
  /** URL of Card */
  url: PropTypes.string.isRequired,
  /** ImageURL of Card */
  imageUrl: PropTypes.string,
  /** Paragraph content of Card */
  paragraph: PropTypes.string,
  /** Call to Action of Card */
  cta: PropTypes.string.isRequired,
};

export default CardHighlight;

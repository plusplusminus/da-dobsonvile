import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const createMarkup = (content) => ({ __html: `${content}` });

const styles = {
  container: {
    display: "block",
    marginBottom: spacing.space6,
  },
  figure: {
    base: {},
    image: {
      display: "block",
      maxWidth: "100%",
    },
  },
  header: {
    base: {},
    heading: {},
    meta: {},
  },
  paragraph: {},
  moreLink: {},
};

const CardCampaign = ({ title, url, imageUrl, meta, paragraph, cta }) => {

  const baseStyles = StyleSheet.create({
    container: {
      ...styles.container,
    },
    header: {
      ...styles.header.base,
    },
    paragraph: {
      ...styles.paragraph.base,
    },
    figure: {
      ...styles.figure.base,
    },
    moreLink: {
      ...styles.moreLink,
    },
  });

  return (
    <article className={css(baseStyles.container)}>
      <header className={css(baseStyles.header)}>
        {
          meta && <Heading
            level={6}
            color={"blue"}
            size={"tiny"}
            weight={"regular"}
            tracking={"small"}
            uppercase
            override={styles.header.meta}
          >
            {meta}
          </Heading>
        }
        <Heading
          level={3}
          color={"blue"}
          mb={"small"}
          size={"large"}
          override={styles.header.heading}
        >
          {title}
        </Heading>
      </header>

      <div className="row">
        { imageUrl &&
          <div className="col-sm-3">
            <figure className={css(baseStyles.figure)}>
              <img src={imageUrl} alt="" style={styles.figure.image} />
            </figure>
          </div>
        }
        <main className={ !imageUrl ? "col-md-12" : "col-md-9"}>
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
        </main>
      </div>
    </article>
  );
}

CardCampaign.propTypes = {
  /** Title of Card */
  title: PropTypes.string.isRequired,
  /** Meta text of Card */
  meta: PropTypes.string,
  /** URL of Card */
  url: PropTypes.string.isRequired,
  /** ImageURL of Card */
  imageUrl: PropTypes.string,
  /** Paragraph content of Card */
  paragraph: PropTypes.string,
  /** Call to Action of Card */
  cta: PropTypes.string.isRequired,
};

CardCampaign.defaultProps = {
  title: null,
  meta: null,
  url: null,
  imageUrl: null,
  paragraph: null,
  cta: null,
};

export default CardCampaign;

import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const createMarkup = (content) => ({ __html: `${content}` });

import Heading from "../Heading";
import MoreLink from "../MoreLink";

const styles = {
  container: {
    base: {
      display: "block",
      marginBottom: spacing.Space5,
    }
  },
  paragraph: {
    base: {
      color: colors.Body,
      fontWeight: fontWeight.normal,
      fontSize: fontStyles(22, 26),
      marginBottom: spacing.Space1,
    }
  },
  figure: {
    base: {},
    image: {
      display: "block",
      maxWidth: "100%",
    },
  },
  header: {
    base: {
      marginBottom: spacing.Space2
    },
    heading: {},
    meta: {
      fontSize: '8px',
    },
  },
  moreLink: {
    fontSize: "11px",
  },
};

const CampaignCard = ({ title, url, imageUrl, meta, paragraph, cta }) => {

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
            weight="normal"
            tracking="large"
            caps
            override={styles.header.meta}
          >
            {meta}
          </Heading>
        }
        <Heading
          level={3}
          weight="thick"
          tracking="tight"
          importance="high"
          size="large"
          override={styles.header.heading}
        >
          {title}
        </Heading>
      </header>

      <div className="row">
        <div className="col-sm-3">
          <figure className={css(baseStyles.figure)}>
            <img src={imageUrl} alt="" style={styles.figure.image} />
          </figure>
        </div>

        <main className="col-md-9">
          <p
            className={css(baseStyles.paragraph)}
            dangerouslySetInnerHTML={createMarkup(paragraph)}
          />

          <MoreLink href={url} color={"red"} caps style={styles.moreLink}>
            { cta }
          </MoreLink>
        </main>
      </div>
    </article>
  );
}

CampaignCard.propTypes = {
  title: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
};

CampaignCard.defaultProps = {
  title: null,
  meta: null,
  url: null,
  imageUrl: null,
  paragraph: null,
  cta: null,
};

export default CampaignCard;

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
};

const CardCampaign = ({ title, imageUrl, meta, paragraph, children }) => {

  const baseStyles = StyleSheet.create({
    container: {
      ...styles.container,
    },
    figure: {
      ...styles.figure.base,
    },
  });

  return (
    <article className={css(baseStyles.container)}>
      <header>
        {
          meta && <Heading
            level={6}
            color={"blue"}
            size={"tiny"}
            weight={"regular"}
            tracking={"small"}
            uppercase
          >
            {meta}
          </Heading>
        }
        <Heading
          level={3}
          color={"blue"}
          mb={"small"}
          size={"large"}
        >
          {title}
        </Heading>
      </header>

      <div className="row">
        { imageUrl &&
          <div className="col-sm-4">
            <figure className={css(baseStyles.figure)}>
              <img src={imageUrl} alt="" style={styles.figure.image} />
            </figure>
          </div>
        }
        <main className={ !imageUrl ? "col-md-12" : "col-md-8"}>
          <Copy html={paragraph} />
          { children }
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
  /** ImageURL of Card */
  imageUrl: PropTypes.string,
  /** Paragraph content of Card */
  paragraph: PropTypes.string,
  /** Children of Card */
  children: PropTypes.string,
};

CardCampaign.defaultProps = {
  title: null,
  meta: null,
  children: null,
  imageUrl: null,
  paragraph: null,
};

export default CardCampaign;

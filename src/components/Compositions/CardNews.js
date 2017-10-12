import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const createMarkup = (content) => ({ __html: `${content}` });

const styles = {
  container: {
    display: "inline-block",
    marginBottom: spacing.space4,
  },
  header: {},
  figure: {
    margin: 0,
  },
};

const CardNews = ({ featured, title, url, imageUrl, meta, paragraph, visual }) => {

  const baseStyles = StyleSheet.create({
    container: {
      ...styles.container,
    },
    figure: {
      ...styles.figure,
    },
  });

  return (
    <article className={css(baseStyles.container)}>
      <div className="row">

        { imageUrl &&
          <div className="col-md-6">
            <figure className={css(baseStyles.figure)}>
              <img src={imageUrl} alt="" className="img-fluid" />
            </figure>
          </div>
        }

        <div className={`${imageUrl && "col-md-6"} ${!imageUrl && "col-md-12"}`}>
          <header className={css(baseStyles.header)}>
            <Heading
              level={3}
              size={`${featured == true ? "medium" : "small"}`}
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
              >
                {meta}
              </Heading>
            }
          </header>
        </div>

      </div>
    </article>
  );
}

CardNews.propTypes = {
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
  featured: PropTypes.bool,
};

CardNews.defaultProps = {
  title: null,
  meta: null,
  url: null,
  imageUrl: null,
  paragraph: null,
  featured: false,
};

export default CardNews;

import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const createMarkup = (content) => ({ __html: `${content}` });

const styles = {
  container: {
    base:{
      display: "inline-block",
      marginBottom: spacing.space4,
    },
    full: {
      marginBottom: spacing.space6,
    }
  },
  header: {
    marginBottom: spacing.space2,
  },
  figure: {
    base: {
      margin: 0,
      marginBottom: spacing.space2,
    },
  },
};

const CardNews = ({ children, full, title, url, imageUrl, meta, text, visual, vertical }) => {

  const baseStyles = StyleSheet.create({
    container: {
      ...styles.container.base,
      ...(vertical && full && styles.container.full),
    },
    header: {
      ...styles.header,
    },
    figure: {
      ...styles.figure.base,
    },
  });

  return (
    <article className={css(baseStyles.container)}>
      <div className="row">

        { imageUrl &&
          <div className={`${vertical ? "col-md-12" : "col-md-5"}`}>
            <figure className={css(baseStyles.figure)}>
              <img src={imageUrl} alt={title} className={`${css(baseStyles.figure)} img-fluid`} />
            </figure>
          </div>
        }

        <div className={`${imageUrl && !vertical ? "col-md-7" : "col-md-12"}`}>
          <header className={css(baseStyles.header)}>
            <Heading
              level={3}
              size={`${full == true ? "medium" : "small"}`}
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
          { text &&
            <Copy html={text} />
          }
          { children && children }
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
  /** Text content of Card */
  text: PropTypes.string,
  /** Is this a full card */
  full: PropTypes.bool,
  /** Is this a vertical card */
  vertical: PropTypes.bool,
  /** Children for the card */
  children: PropTypes.string,
};

CardNews.defaultProps = {
  title: null,
  meta: null,
  url: null,
  imageUrl: null,
  text: null,
  children: null,
  full: false,
};

export default CardNews;

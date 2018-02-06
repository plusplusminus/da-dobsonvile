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
  header: {
    marginBottom: spacing.space2,
  },
  figure: {
    base: {
      margin: 0,
    },
    vertical: {
      marginBottom: spacing.space1,
    }
  },
};

const CardNews = ({ children, full, title, url, imageUrl, meta, text, visual, vertical }) => {

  const baseStyles = StyleSheet.create({
    container: {
      ...styles.container,
    },
    header: {
      ...styles.header,
    },
    figure: {
      ...styles.figure.base,
      ...(vertical && styles.figure.vertical),
    },
  });

  return (
    <article className={css(baseStyles.container)}>
      <div className="row">

        { imageUrl &&
          <div className={`${vertical && "col-md-12"} ${!vertical && full && "col-md-6"} ${!vertical && !full && "col-md-5"}`}>
            <figure className={css(baseStyles.figure)}>
              <img src={imageUrl} alt="" className="img-fluid" />
            </figure>
          </div>
        }

        <div className={`${imageUrl && !vertical && full && "col-md-6"} ${imageUrl && !vertical && !full && "col-md-7"} ${imageUrl && vertical && "col-md-12"} ${!imageUrl && "col-md-12"}`}>
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

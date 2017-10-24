import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Copy, Heading, MoreLink } from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const createMarkup = (content) => ({ __html: `${content}` });

const styles = {
  container: {
    borderRadius: spacing.space05,
    overflow: 'hidden',
    marginBottom: spacing.space4,
    paddingTop: spacing.space9,
    paddingBottom: spacing.space9,
    backgroundColor: colors.bgWhite,
  },
  wrapper: {

  },
  figure:{
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '100%',
    overflow: 'hidden',
    margin: 0,
    paddingBottom: '100%',
  },
};

const Testimonial = ({ highlight, url, imageUrl, meta, paragraph, cta }) => {

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
      <div className={"row align-items-center"}>
        <div className={"col-md-2 offset-md-1"}>
          <figure className={css(baseStyles.figure)} style={{backgroundImage:`url(${imageUrl})`}}></figure>
        </div>

        <div className={"col-md-8"}>
          <div className={css(baseStyles.wrapper)}>

            { highlight &&
              <Copy
                color={"blue"}
                size={"large"}
                weight={"medium"}
              >
                {highlight}
              </Copy>
            }
            { paragraph &&
              <Copy isParent>
                <p
                  className={css(baseStyles.paragraph)}
                  dangerouslySetInnerHTML={createMarkup(paragraph)}
                />
              </Copy>
            }

            { meta &&
              <Heading
                level={6}
                color={"blue"}
                size={"tiny"}
                letterSpacing={"small"}
                weight={"medium"}
                tracking={"small"}
                mb={"none"}
              >
                {meta}
              </Heading>
            }

          </div>
        </div>
      </div>

    </section>
  );
}

Testimonial.defaultProps = {
  highlight: null,
  meta: null,
  url: null,
  imageUrl: null,
  paragraph: null,
  cta: null,
};

Testimonial.propTypes = {
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

export default Testimonial;

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
    paddingTop: spacing.space4,
    paddingRight: spacing.space2,
    paddingBottom: spacing.space4,
    paddingLeft: spacing.space2,
    backgroundColor: colors.bgWhite,
    '@media (min-width: 576px)': {
      paddingTop: spacing.space9,
      paddingBottom: spacing.space9,
    }
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

const Testimonial = ({ headline, imageUrl, meta, text }) => {

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
        { imageUrl &&
          <div className={"col-md-2 offset-md-1"}>
            <figure className={css(baseStyles.figure)} style={{backgroundImage:`url(${imageUrl})`}}></figure>
          </div>
        }

        <div className={` ${imageUrl ? "col-md-8" : "col-md-10 offset-md-1"}`}>
          <div className={css(baseStyles.wrapper)}>

            { headline &&
              <Copy
                color={"blue"}
                size={"large"}
                weight={"medium"}
              >
                {headline}
              </Copy>
            }
            { text &&
              <Copy html={text} />
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
  headline: null,
  meta: null,
  imageUrl: null,
  text: null,
};

Testimonial.propTypes = {
  /** Headline of Testimonial */
  headline: PropTypes.string,
  /** Attibution text of Testimonial */
  meta: PropTypes.string,
  /** ImageURL of Testimonial */
  imageUrl: PropTypes.string,
  /** Paragraph content of Testimonial */
  text: PropTypes.string.isRequired,
};

export default Testimonial;

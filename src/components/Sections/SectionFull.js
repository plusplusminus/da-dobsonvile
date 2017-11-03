import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { HeadingLines, Heading } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';


const styles = {
  base:{
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  bg:{
  },
  bgColor: {
    blue: {
      backgroundColor: colors.bgBlue,
    },
    blueLight: {
      backgroundColor: colors.bgBlueLight,
    },
    light: {
      backgroundColor: colors.bgLight,
    },
    lightO: {
      backgroundColor: colors.bgLightO,
    },
    dark: {
      backgroundColor: colors.bgDark,
    },
    darkO: {
      backgroundColor: colors.bgDarkO,
    },
    white: {
      backgroundColor: colors.bgWhite,
    },
  },
  center:{
    textAlign: 'center',
  },
  space: {
    mb:{
      none: {
        marginBottom: spacing.space0,
      },
      small: {
        marginBottom: spacing.space6,
      },
      medium: {
        marginBottom: spacing.space9,
      },
      large: {
        marginBottom: spacing.space13,
      },
    },
    mt:{
      none: {
        marginTop: spacing.space0,
      },
      small: {
        marginTop: spacing.space6,
      },
      medium: {
        marginTop: spacing.space9,
      },
      large: {
        marginTop: spacing.space13,
      },
    },
    pb:{
      none: {
        paddingBottom: spacing.space0,
      },
      small: {
        paddingBottom: spacing.space6,
      },
      medium: {
        paddingBottom: spacing.space9,
      },
      large: {
        paddingBottom: spacing.space13,
      },
    },
    pt:{
      none: {
        paddingTop: spacing.space0,
      },
      small: {
        paddingTop: spacing.space6,
      },
      medium: {
        paddingTop: spacing.space9,
      },
      large: {
        paddingTop: spacing.space13,
      },
    }
  },
}

const sectionFull = (props) => {

  const { bgColor, bgUrl, color, center, mb, mt, pb, pt, title, children, container } = props;

  const baseStyles = StyleSheet.create({
    base:{
      ...styles.base,
      ...(center && styles[center]),
      ...(mt && styles.space.mt[mt]),
      ...(mb && styles.space.mb[mb]),
    },
    bg:{
      ...styles.bg,
      ...(pt && styles.space.pt[pt]),
      ...(pb && styles.space.pb[pb]),
      ...(bgColor && styles.bgColor[bgColor]),
    },
  });

  return (
    <section className={css(baseStyles.base)} style={{backgroundImage:`url(${bgUrl})`}}>
      <div className={css(baseStyles.bg)}>
        <div className={ container === true ? "container" : null }>
          { title && !center &&
            <HeadingLines lineLeft color={color} mb={"huge"} >
              <Heading color={color} size={"tiny"} tracking={"huge"} weight={"light"} uppercase>{title}</Heading>
            </HeadingLines>
          }
          { title && center &&
            <Heading color={color} mb={"small"} center>{title}</Heading>
          }
          <div className="row">
            { children }
          </div>
        </div>
      </div>
    </section>
  )
}

sectionFull.defaultProps = {
  bgColor: 'white',
  bgUrl: null,
  color: 'base',
  center: false,
  children: null,
  mb: 'large',
  mt: 'none',
  pt: 'none',
  pb: 'none',
  title: null,
  container: true,
}

sectionFull.propTypes = {
  /** Background color of Section. Layered over the optional bgUrl image */
  bgColor: PropTypes.oneOf([
    "blue",
    "blueLight",
    "light",
    "lightO",
    "dark",
    "darkO",
    "white",
  ]),
  /** URL for Background Image of Section */
  bgUrl: PropTypes.string,
  /** Color of Heading in section. Can be used to pass to children */
  color: PropTypes.oneOf([
    "base",
    "blue",
    "red",
    "white",
  ]),
  /** Should section text and heading be center aligned. Changes format of title if present. Can be overwritten by alignment children components */
  center: PropTypes.bool,
  /** Content of section. For coloumns, apply Bootstrap col values to divs inside children. */
  children: PropTypes.node.isRequired,
  /** Should section contents be wrapped in container div */
  container: PropTypes.bool,
  /** Margin Bottom of Section. Margin is primary spacing unit. Top down approach */
  mb: PropTypes.oneOf([
    "none",
    "large",
    "medium",
    "small",
  ]),
  /** Margin Top of Section. Margin is primary spacing unit. Top down approach */
  mt: PropTypes.oneOf([
    "none",
    "large",
    "medium",
    "small",
  ]),
  /** Padding Top of Section. Margin is primary spacing unit. Top down approach */
  pt: PropTypes.oneOf([
    "none",
    "large",
    "medium",
    "small",
  ]),
  /** Padding Bottom of Section. Margin is primary spacing unit. Top down approach */
  pb: PropTypes.oneOf([
    "none",
    "large",
    "medium",
    "small",
  ]),
  /** Optional Title of section */
  title: PropTypes.string,

}

export default sectionFull;
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';
import { Heading, HeadingLines, MoreLink } from 'components';

const styles = {
  hero:{
    base:{},
    imageUrl:{
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    mb:{
      none:{
        marginBottom: spacing.space0,
      },
      large:{
        marginBottom: spacing.space13,
      },
    }
  },
  wrapper:{
    base:{
      minHeight: parseInt(spacing.space6)*6,
      paddingTop: parseInt(spacing.space9)*2,
      paddingBottom: spacing.space13,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    imageUrl:{
      background: colors.bgLight,
      backgroundColor: 'rgba(0,0,0,0.3)',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(21,95,162,0.85) 100%)',
    },
    small:{
      paddingTop: spacing.space9,
      paddingBottom: spacing.space0,
      justifyContent: 'flex-end',
    }
  },
};

  const Hero = ({ center, children, imageUrl, mb, small, title }) => {

  const baseStyles = StyleSheet.create({
    hero: {
      ...styles.hero.base,
      ...(imageUrl && styles.hero.imageUrl),
      ...(mb && styles.hero.mb[mb]),
      backgroundImage: `url(${imageUrl})`,
    },
    wrapper :{
      ...styles.wrapper.base,
      ...(imageUrl && styles.wrapper.imageUrl),
      ...(small && styles.wrapper.small),
    }
  });

  return (
    <div className={css(baseStyles.hero)}>
      <div className={css(baseStyles.wrapper)}>
        <div className="container">
          <div className="row">
            <div className={`col-md-8 ${center ? "offset-md-2" : null}`}>

              { title &&
                <Heading
                  size={"huge"}
                  color={ imageUrl ? "white" : "blue" }
                  mb={"huge"}
                  center={ !center ? false : true }
                >
                  { title }
                </Heading>
              }

              { children }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  center: false,
  children: null,
  imageUrl: null,
  mb: "none",
  small: true,
  title: null,
}

Hero.propTypes = {
  /** Is the title centered */
  center: PropTypes.bool,
  /** Children of the Hero - such as CTA etc */
  children: PropTypes.node,
  /** ImageUrl for background effect */
  imageUrl: PropTypes.string,
  /** Margin Bottom of hero */
  mb: PropTypes.oneOf([
    "none",
    "large"
  ]),
  /** Is the Hero as small version */
  small: PropTypes.bool,
  /** Title of Hero Component */
  title: PropTypes.string.isRequired,
}

export default Hero;

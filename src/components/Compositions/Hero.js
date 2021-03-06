import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';
import { Heading, HeadingLines, MoreLink } from 'components';
import {styleConvert} from '../../utils/helpers';

const styles = {
  hero:{
    imageUrl:{
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    mb:{
      none:{
        marginBottom: spacing.space0,
        '@media (min-width: 576px)' : {
          marginBottom: spacing.space0,
        }
      },
      large:{
        marginBottom: spacing.space7,
        '@media (min-width: 576px)' : {
          marginBottom: spacing.space13,
        }
      },
    }
  },
  wrapper:{
    base:{
      paddingTop: spacing.space5,
      paddingBottom: spacing.space4,
      '@media (min-width: 576px)' : {
        paddingTop: spacing.space9,
        paddingBottom: spacing.space7,
      },
      '@media (min-width: 992px)' : {
        paddingTop: `${parseInt(spacing.space9)*2}px`,
        paddingBottom: spacing.space13,
      },
    },
    imageUrl:{
      background: colors.bgLight,
      backgroundColor: 'rgba(0,0,0,0.3)',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(21,95,162,0.85) 100%)',
      '@media (min-width: 576px)' : {
        minHeight: `${parseInt(spacing.space6)*6}px`,
      }
    },
    small:{
      paddingTop: spacing.space3,
      paddingBottom: spacing.space3,
      justifyContent: 'flex-end',
      '@media (min-width: 576px)' : {
        paddingTop: spacing.space9,
        paddingBottom: spacing.space7,
      },
      '@media (min-width: 992px)' : {
        paddingTop: spacing.space10,
        paddingBottom: spacing.space8,
      }
    }
  },
};

  const Hero = ({ bgPosition, center, children, imageUrl, mb, small, title }) => {

    const hero = [
      (imageUrl && styles.hero.imageUrl),
      (imageUrl ? { backgroundImage: `url(${imageUrl}),` } : {}),
      (imageUrl ? { backgroundPosition: bgPosition } : {}),
      (!imageUrl && styles.hero.mb.none),
      (imageUrl && styles.hero.mb.large),
      (mb && styles.hero.mb[mb]),
    ]

    const wrapper = [
      (styles.wrapper.base),
      (imageUrl && styles.wrapper.imageUrl),
      (small && styles.wrapper.small),
    ]

  const baseStyles = StyleSheet.create({
    hero: styleConvert(hero),
    wrapper: styleConvert(wrapper)
  });

  return (
    <div className={css(baseStyles.hero)}>
      <div className={css(baseStyles.wrapper)}>
        <div className="container">
          <div className="row">
            <div className={`col-md-10 ${center ? "offset-md-1" : null}`}>

              { title &&
                <Heading
                  size={"huge"}
                  color={ imageUrl ? "white" : "blue" }
                  mb={ !small ? "huge" : "small"}
                  align={ !center ? "left" : "center" }
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
  small: true,
  title: null,
  mb: null,
  bgPosition: 'center center',
}

Hero.propTypes = {
  /** Is the title centered */
  center: PropTypes.bool,
  /** Children of the Hero - such as CTA etc */
  children: PropTypes.node,
  /** ImageUrl for background effect */
  imageUrl: PropTypes.string,
  /** bgPosition to control image position */
  bgPosition: PropTypes.string,
  /** Is the Hero as small version */
  small: PropTypes.bool,
  /** Title of Hero Component */
  title: PropTypes.string.isRequired,
  /** Optional manual override of Margin Bottom of hero */
  mb: PropTypes.oneOf([
    null,
    "none",
    "large"
  ]),
}

export default Hero;

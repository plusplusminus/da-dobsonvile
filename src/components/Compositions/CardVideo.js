import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, HeaderArticle, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const CardVideo = (props) => {

  const { body, color, copy, cta, featured, heading, visual } = props;

  const styles = StyleSheet.create({
    cardVideo:{
      display: 'inline-block',
      width: '100%',
      marginBottom: spacing.Space5,
    },
    visual:{
      marginBottom: spacing.Space3,
    },
  });

  return (
    <div className={css(styles.cardVideo)}>
      { visual &&
        <div className={css(styles.visual)}>{ visual }</div>
      }
      { featured == true
        ? <Heading color={color}>{ heading }</Heading>
        : <HeadingSmall color={color}>{ heading }</HeadingSmall>
      }
      { featured &&
        <div>{ body }{ cta }</div>
      }

    </div>
  )
}


CardVideo.defaultProps = {
  body: null,
  cta: null,
  color: 'Primary',
  featured: false,
  heading: null,
}

CardVideo.propTypes = {
  body: PropTypes.string,
  cta: PropTypes.string,
  color: PropTypes.string,
  featured: PropTypes.bool,
  heading: PropTypes.string,
};

export default CardVideo;

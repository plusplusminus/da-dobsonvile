import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, HeaderArticle, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const CardHighlight = (props) => {

  const { body, copy, cta, header, visual } = props;

  const styles = StyleSheet.create({
    cardHighlight:{
      display: 'inline-block',
      width: '100%',
      display: 'flex',
    },
    wrapper:{
      padding: spacing.Space6,
      backgroundColor: colors.White,
      width: '50%',
    },
    visual:{
      width: '50%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
  });

  return (
    <div className={css(styles.cardHighlight)}>
      <div className={css(styles.wrapper)}>
        { header }
        { body }
        { cta }
      </div>
      <div className={css(styles.visual)} style={{backgroundImage:`url(${visual})`}}></div>
    </div>
  )
}


CardHighlight.defaultProps = {
  heading: null,
  body: null,
  cta: null,
}

CardHighlight.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  cta: PropTypes.string,
};

export default CardHighlight;

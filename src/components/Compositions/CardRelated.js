import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, HeaderArticle, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const CardHighlight = (props) => {

  const { body, copy, cta, heading, visual } = props;

  const styles = StyleSheet.create({
    cardHighlight:{
      display: 'inline-block',
      width: '100%',
      marginBottom: spacing.space5,
      padding: spacing.space4,
      backgroundColor: colors.bgLight,
    },
    wrapper:{
      float: props.vertical == true ? 'none' : 'left',
      width: props.vertical == true ? '100%' : '60%',
    },
    visual:{
      marginBottom: spacing.space3,
      float: props.vertical == true ? 'none' : 'right',
      marginLeft: props.vertical == true ? '0' : '5%',
      width: props.vertical == true ? '100%' : '30%',
    },
  });

  return (
    <div className={css(styles.cardHighlight)}>
      <div className={css(styles.visual)}>
        { visual }
      </div>
      <div className={css(styles.wrapper)}>
        { heading }
        { body }
        { cta }
      </div>
    </div>
  )
}


CardHighlight.defaultProps = {
  heading: null,
  body: null,
  cta: null,
  vertical: false,
}

CardHighlight.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  cta: PropTypes.string,
  vertical: PropTypes.bool,
};

export default CardHighlight;

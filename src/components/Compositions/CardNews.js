import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, HeaderArticle, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const CardNews = (props) => {

  const { color, heading, meta, visual } = props;

  const styles = StyleSheet.create({
    cardNews:{
      display: 'inline-block',
      width: '100%',
      marginBottom: spacing.Space4,
    },
    visual:{
      display: 'block',
      float: 'left',
      marginRight: spacing.Space2,
    },
  });

  return (
    <div className={css(styles.cardNews)}>
      { visual &&
        <div className={css(styles.visual)}>{ visual }</div>
      }
      { heading &&
        <HeadingSmall color={color}>{ heading }</HeadingSmall>
      }
      { meta &&
        <HeadingMeta textTransform={"uppercase"} letterSpacing={"Base"}>{ meta }</HeadingMeta>
      }
    </div>
  )
}


CardNews.defaultProps = {
  heading: null,
  meta: null,
  color: 'Copy',
}

CardNews.propTypes = {
  heading: PropTypes.string,
  meta: PropTypes.string,
  color: PropTypes.string,
};

export default CardNews;

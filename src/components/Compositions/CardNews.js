import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, HeaderArticle, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';


const CardNews = (props) => {

  const { heading, meta, visual } = props;

  const styles = StyleSheet.create({
    cardNews:{
      display: 'inline-block',
      width: '100%',
      marginBottom: spacing.space4,
    },
    visual:{
      display: 'block',
      float: 'left',
      marginRight: spacing.space2,
    },
  });

  return (
    <div className={css(styles.cardNews)}>
      { visual &&
        <div className={css(styles.visual)}>{ visual }</div>
      }
        <Heading size={"small"} mb={"tiny"} tracking={"none"}>{ heading }</Heading>
        <Heading size={"tiny"} tracking={"none"} weight={"light"}  uppercase>{ meta }</Heading>
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

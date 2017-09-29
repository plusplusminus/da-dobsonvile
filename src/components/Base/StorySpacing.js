import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, HeaderArticle, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const StorySpacing = (props) => {

  const { space } = props;

  const styles = StyleSheet.create({
    storySpacing:{
      position: 'relative',
      display: 'block',
      width: '100%',
      marginBottom: 0,
      marginTop: '-1px',
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderColor: colors.Border,
      height: spacing[props.space],
      textAlign: 'center',
    },
    name:{
      wordBreak: 'break-word',
      fontSize: '14px',
    },
  });

  return (
    <div className={css(styles.storySpacing)}>
      <p className={css(styles.name)}><strong>{ space }:</strong> <em>{ spacing[space] }</em></p>
    </div>
  )
}


StorySpacing.defaultProps = {
  space: 'Space15',
}

StorySpacing.propTypes = {
  space: PropTypes.string,
};

export default StorySpacing;

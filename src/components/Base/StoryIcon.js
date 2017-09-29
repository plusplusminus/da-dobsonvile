import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, HeaderArticle, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const StoryIcons = (props) => {

  const { name } = props;

  const styles = StyleSheet.create({
    storyIcon:{
      display: 'block',
      padding: spacing.Space1,
      textAlign: 'center',
    },
    icon:{
      fontSize: '200%',
    },
    label:{
      display: 'block',
    }
  });

  return (
    <div className="col-md-2">
      <div className={css(styles.storyIcon)}>
        <i className={`icon icon-${name} ${css(styles.icon)}`}></i>
        <div className={css(styles.label)}>
          <small><em>{name}</em></small>
        </div>
      </div>
    </div>
  )
}


StoryIcons.defaultProps = {
  name: null,
}

StoryIcons.propTypes = {
  name: PropTypes.string.isRequired,
};

export default StoryIcons;

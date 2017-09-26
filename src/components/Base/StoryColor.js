import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, HeaderArticle, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const StoryColor = (props) => {

  const { name } = props;

  const styles = StyleSheet.create({
    storyColor:{
      display: 'block',
      width: '100%',
      marginBottom: spacing.Space4,
    },
    wrapperColor:{
      textAlign: 'center',
      padding: 0,
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: spacing.Space1,
      display: 'inline-block',
      verticalAlign: 'top',
      wordWrap: 'break-word',
      listStyle: 'none',
      width: '100%',
    },
    color:{
      height: spacing.Space10,
      borderTopRightRadius: spacing.Space1,
      borderTopLeftRadius: spacing.Space1,
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundColor: colors[props.name],
    },
    wrapperName:{
      listStyle: 'none',
      paddingLeft: spacing.Space1,
      paddingRight: spacing.Space1,
    },
    name:{
      float: 'left',
      fontWeight: 'bold',
      wordBreak: 'break-word',
      fontSize: '14px',
      paddingTop: spacing.Space1,
      paddingBottom: spacing.Space1,
      margin: 0,
    },
    code:{
      float: 'right',
      fontWeight: 'normal',
      wordBreak: 'break-word',
      fontSize: '14px',
      paddingTop: spacing.Space1,
      paddingBottom: spacing.Space1,
      margin: 0,
    }
  });

  return (
    <div className="col-2">
      <div className={css(styles.storyColor)}>
        <div className={css(styles.wrapperColor)}>
          <div className={css(styles.color)}></div>
          <div className={css(styles.wrapperName)}>
            <h4 className={css(styles.name)}>
              { name }
            </h4>
            <h4 className={css(styles.code)}>
              <em>{ colors[name] }</em>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}


StoryColor.defaultProps = {
  name: 'Color Name',
}

StoryColor.propTypes = {
  name: PropTypes.string,
};

export default StoryColor;

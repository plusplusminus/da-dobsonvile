import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Button, Copy, HeadingAside } from 'components';
import { colors, fontWeight, spacing } from 'common/styles/variables';

function Aside(props) {

  const { heading, headingColor, copy, copyColor, buttonLabel, copyWeight, visual } = props;

  const styles = StyleSheet.create({
    aside:{
      borderRadius: spacing.Space1,
      marginBottom: spacing.Space5,
      backgroundColor: colors[props.backgroundColor],
    },
    visual:{
      borderTopLeftRadius: spacing.Space1,
      borderTopRightRadius: spacing.Space1,
      display: 'block',
    },
    wrapper:{
      padding: spacing[props.padding],
    }
  });

  return (
    <aside className={css(styles.aside)}>
      { visual &&
        <img width="100%" src={visual} className={`${css(styles.visual)} img-fluid`} alt="alt"/>
      }
      <div className={css(styles.wrapper)}>
        <HeadingAside
          color={ headingColor }>
          { heading }
        </HeadingAside>
        <Copy
          color={ copyColor }
          align={"left"}
          fontWeight={copyWeight}>
          { copy }
        </Copy>
        <Button
          color={"White"}
          borderColor={"Green"}
          backgroundColor={"Green"}>
          { buttonLabel }
        </Button>
      </div>
    </aside>
  )
}

Aside.defaultProps = {
  align: 'left',
  backgroundColor: 'bgLight',
  buttonLabel: 'View All',
  copy: 'Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.',
  copyColor: 'Copy',
  copyWeight: 'Light',
  heading: 'Heading',
  headingColor: 'Primary',
  padding: 'Space5',
}

Aside.propTypes = {
  align: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonLabel: PropTypes.string,
  copy: PropTypes.string,
  copyColor: PropTypes.string,
  copyWeight: PropTypes.string,
  heading: PropTypes.string,
  headingColor: PropTypes.string,
  padding: PropTypes.string,
}

export default Aside;

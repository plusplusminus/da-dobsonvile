import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Button, Copy, HeadingAside } from 'components';
import { colors, fontWeight, spacing } from 'common/styles/variables';
import {default as HeadingTest} from 'components/Heading';
import {default as ButtonTest} from 'components/Button'

function AsideOverlay(props) {

  const { heading, headingColor, copy, copyColor, buttonLabel, copyWeight, visual } = props;

  const styles = StyleSheet.create({
    asideOverlay:{
      borderRadius: spacing.Space1,
      marginBottom: spacing.Space5,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    bg:{
      borderRadius: spacing.Space1,
      backgroundColor: colors[props.backgroundColor],
      padding: spacing[props.padding],
      display: 'flex',
      alignItems: props.align,
      flexDirection: 'column'
    },
  });

  return (
    <aside className={css(styles.asideOverlay)} style={{backgroundImage:`url(${visual})`}}>
      <div className={css(styles.bg)}>
        <HeadingTest
          importance="high"
          size="large"
          weight="thick"
        >
          { heading }
        </HeadingTest>
        <Copy
          color={ copyColor }
          align={"center"}
          fontWeight={copyWeight}>
          { copy }
        </Copy>
        <ButtonTest
          color="blue">
          { buttonLabel }
        </ButtonTest>
      </div>
    </aside>
  )
}

AsideOverlay.defaultProps = {
  align: 'center',
  backgroundColor: 'bgDarkO',
  buttonLabel: 'View All',
  copy: 'Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.',
  copyColor: 'White',
  copyWeight: 'Light',
  heading: 'Heading',
  headingColor: 'White',
  padding: 'Space5',
}

AsideOverlay.propTypes = {
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

export default AsideOverlay;

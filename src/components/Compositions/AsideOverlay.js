import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Button, Copy, Heading } from 'components';
import { colors, fontWeight, spacing } from 'common/styles/variables';

import {default as ButtonTest} from 'components/Button'

function AsideOverlay(props) {

  const { heading, headingColor, copy, copyColor, buttonLabel, copyWeight, visual } = props;

  const styles = StyleSheet.create({
    asideOverlay:{
      borderRadius: spacing.space1,
      marginBottom: spacing.space5,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    bg:{
      borderRadius: spacing.space1,
      backgroundColor: props.backgroundColor,
      padding: props.padding,
      display: 'flex',
      alignItems: props.align,
      flexDirection: 'column'
    },
  });

  return (
    <aside className={css(styles.asideOverlay)} style={{backgroundImage:`url(${visual})`}}>
      <div className={css(styles.bg)}>
        <Heading
          color={"white"}
          weight={"bold"}
          size={"large"}
        >
          { heading }
        </Heading>
        <Copy
          color={ colors.textWhite }
          align={"center"}
          fontWeight={fontWeight.bold}>
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
  backgroundColor: colors.bgDarkO,
  buttonLabel: 'View All',
  copy: 'Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.',
  heading: 'Heading',
  padding: spacing.space5,
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

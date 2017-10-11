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
      marginBottom: spacing.space4,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    bg:{
      borderRadius: spacing.space1,
      backgroundColor: colors.bgDarkO,
      paddingTop: spacing.space9,
      paddingRight: spacing.space7,
      paddingBottom: spacing.space9,
      paddingLeft: spacing.space7,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
  });

  return (
    <aside className={css(styles.asideOverlay)} style={{backgroundImage:`url(${visual})`}}>
      <div className={css(styles.bg)}>
        <Heading
          color={"white"}
          size={"large"}
          mb={"small"}
        >
          { heading }
        </Heading>
        <Copy
          color={"white"}
          weight={"bold"}
          mb={"large"}
          center
        >
          { copy }
        </Copy>
        <ButtonTest
          color="blue"
          center
        >
          { buttonLabel }
        </ButtonTest>
      </div>
    </aside>
  )
}

AsideOverlay.defaultProps = {
  buttonLabel: 'View All',
  copy: 'Find out more about DAs delivery record',
  heading: 'Heading',
}

AsideOverlay.propTypes = {
  buttonLabel: PropTypes.string,
  heading: PropTypes.string,
}

export default AsideOverlay;

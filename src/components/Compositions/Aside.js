import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Button, Copy, Heading } from 'components';

import {default as ButtonTest} from 'components/Button'
import { colors, fontWeight, spacing } from 'common/styles/variables';

function Aside(props) {

  const { heading, copy, buttonLabel, visual } = props;

  const styles = StyleSheet.create({
    aside:{
      borderRadius: spacing.space1,
      marginBottom: spacing.space4,
      backgroundColor: colors.bgLight,
    },
    visual:{
      borderTopLeftRadius: spacing.space1,
      borderTopRightRadius: spacing.space1,
      display: 'block',
    },
    wrapper:{
      padding: spacing.space4,
      paddingBottom: spacing.space6,
    }
  });

  return (
    <aside className={css(styles.aside)}>
      { visual &&
        <img width="100%" src={visual} className={`${css(styles.visual)} img-fluid`} alt="alt"/>
      }
      <div className={css(styles.wrapper)}>
        <Heading
          color="blue"
          size="large"
          mb="small"
        >
          { heading }
        </Heading>

        <Copy mb={"large"}>
          { copy }
        </Copy>

        <ButtonTest color="blue">
          { buttonLabel }
        </ButtonTest>
      </div>
    </aside>
  )
}

Aside.defaultProps = {
  buttonLabel: 'View All',
  copy: 'Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.',
  heading: 'Heading',
}

Aside.propTypes = {
  buttonLabel: PropTypes.string,
  copy: PropTypes.string,
  heading: PropTypes.string,
}

export default Aside;

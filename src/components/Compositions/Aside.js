import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Button, Copy } from 'components';
import {default as HeadingTest} from 'components/Heading';
import {default as ButtonTest} from 'components/Button'
import { colors, fontWeight, spacing } from 'common/styles/variables';

function Aside(props) {

  const { heading, headingColor, copy, copyColor, buttonLabel, copyWeight, visual } = props;

  const styles = StyleSheet.create({
    aside:{
      borderRadius: spacing.space1,
      marginBottom: spacing.space5,
      backgroundColor: colors[props.backgroundColor],
    },
    visual:{
      borderTopLeftRadius: spacing.space1,
      borderTopRightRadius: spacing.space1,
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
        <HeadingTest
          importance="high"
          size="large"
          weight="thick"
        >
          { heading }
        </HeadingTest>
        <Copy
          color={ copyColor }
          align={"left"}
          fontWeight={copyWeight}>
          { copy }
        </Copy>
        <ButtonTest
          color="blue"
          >
          { buttonLabel }
        </ButtonTest>
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

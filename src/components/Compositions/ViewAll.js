import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { default as ButtonTest } from "components/Button";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const ViewAll = (props) => {

  const { buttonColor, buttonLabel, } = props;

  const styles = StyleSheet.create({
    ViewAll:{
      width: '100%',
      paddingTop: spacing.space5,
      marginTop: spacing.space5,
      marginBottom: spacing.space5,
      borderTop: '1px solid',
      borderColor: props.borderColor,
      textAlign: 'center',
      display: 'flex',
      justfyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

  return (
    <div className={css(styles.ViewAll)}>
      <ButtonTest color={props.buttonColor} outline >{ buttonLabel }</ButtonTest>
    </div>
  )
}


ViewAll.defaultProps = {
  buttonLabel: 'View All',
  borderColor: colors.borderLight,
  buttonColor: 'blue',
}

ViewAll.propTypes = {
  /** Label of button*/
  buttonLabel: PropTypes.string,
  /** Color of Border as per variables.js*/
  borderColor: PropTypes.string,
  /** Color of the button */
  buttonColor: PropTypes.oneOf([
    "blue",
    "red",
    "green",
    "yellow",
    "white",
  ]),
};

export default ViewAll;

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { default as ButtonTest } from "components/Button";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const ViewAll = (props) => {

  const { buttonColor, children } = props;

  const styles = StyleSheet.create({
    ViewAll:{
      width: '100%',
      paddingTop: spacing.space6,
      marginTop: spacing.space7,
      borderTop: '1px solid',
      borderColor: props.borderColor,
      display: 'flex',
      '@media (max-width: 576px)' : {
        paddingTop: spacing.space3,
        marginTop: spacing.space4,
      }
    },
  });

  return (
    <div className={css(styles.ViewAll)}>
      <ButtonTest color={props.buttonColor} center outline >{ children }</ButtonTest>
    </div>
  )
}


ViewAll.defaultProps = {
  children: 'View All',
  borderColor: colors.borderLight,
  buttonColor: 'blue',
}

ViewAll.propTypes = {
  /** Label of button*/
  children: PropTypes.string,
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

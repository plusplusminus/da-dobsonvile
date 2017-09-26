import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const ViewAll = (props) => {

  const { buttonColor, buttonLabel, } = props;

  const styles = StyleSheet.create({
    ViewAll:{
      width: '100%',
      paddingTop: spacing.Space5,
      marginTop: spacing.Space5,
      marginBottom: spacing.Space5,
      borderTop: '1px solid',
      borderColor: colors[props.borderColor],
      textAlign: 'center',
      display: 'flex',
      justfyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

  return (
    <div className={css(styles.ViewAll)}>
      <ButtonViewAll color={buttonColor}>{ buttonLabel }</ButtonViewAll>
    </div>
  )
}


ViewAll.defaultProps = {
  buttonLabel: 'View All',
  borderColor: 'BorderLight',
  buttonColor: 'BlueLight',
  buttonBorderColor: 'BlueLight',
  buttonBackgroundColor: 'Transparent',
}

ViewAll.propTypes = {
  buttonLabel: PropTypes.string,
  borderColor: PropTypes.string,
  buttonColor: PropTypes.string,
};

export default ViewAll;

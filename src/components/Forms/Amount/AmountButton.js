import React, { Component } from 'react';
import { colors, spacing } from "../../../common/styles/variables";
import { ButtonTest } from "components";
import { StyleSheet, css } from 'aphrodite';


const AmountButton = (props) => {

  const { label, selected, value, type } = props;

  const styles = StyleSheet.create({
    wrapper: {
      borderRadius: spacing.space05,
      overflow: 'hidden',
      boxShadow:'0 0 0 1px #ebebeb',
    },
  });

  return(
    <ButtonTest
      full
      rounded={false}
      customStyles={{
        borderWidth:"0px",
        boxShadow:'0 0 0 1px #ebebeb',
        backgroundColor: selected === true ? colors.brandBlue : colors.brandWhite,
        color: selected === true ? colors.brandWhite : colors.brandBlue,
      }}
      onClick={props.onClick}
    >
      {label}
    </ButtonTest>
  )
};

AmountButton.defaultProps = {
  label: null,
  value: null,
  type: null,
  selected: false,
}

export default AmountButton;

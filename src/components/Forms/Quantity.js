import React from 'react'
import { colors } from "../../common/styles/variables";
import { Icon } from "components";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    transition: 'padding 0.8s',
    justifyContent: 'space-between',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    color: colors.textBase,
    border: 0,
    width: '50px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    height: 'auto',
    color: colors.brandPrimary,
    fontSize: '1.5rem',
    padding: 0,
    border: 0
  }
});

const Quantity = props => (
  <div className={css(styles.wrapper)}>
    <div className={css(styles.inner)}>
      <button type="button" className={css(styles.button)} onClick={props.onDecreaseQuantity}><Icon name="minus"/></button>
      <span className={css(styles.input)}>{props.quantity}</span>
      <button type="button" className={css(styles.button)} onClick={props.onIncreaseQuantity}><Icon name="plus"/></button>
    </div>
    { props.children }
  </div>
);

export default Quantity;

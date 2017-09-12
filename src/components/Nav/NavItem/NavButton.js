import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { getHoverAttributes } from 'utils/helpers'
import { Button } from 'components'

const NavButton = (props) => {

  const styles = {
    color: props.color,
    borderColor: props.color,
    backgroundColor: 'Transparent',
    hover: {
      backgroundColor: props.color,
      borderColor: props.color,
      color: props.color === 'White' ? 'Primary' : 'White',
    }
  }

  return (
    <Button { ...styles } >{ props.children }</Button>
  )
}

export default NavButton;

import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Button } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from '../../../common/styles/variables';

const Navbar = (props) => {

  const { content, weight, color, children } = props;

  const styles = StyleSheet.create({
    navbar:{
      backgroundColor: colors[props.background],
      paddingTop: spacing[props.padding],
      paddingBottom: spacing[props.padding],
      width: '100%',
      display: 'flex',
      justifyContent:'flex-end',
      alignItems: 'center',
      ...props.custom
    },
    ul: {
      marginBottom: 0,
      paddingLeft: 0,
      display: 'flex',
      justifyContent:'flex-end',
      alignItems: 'center',
    }
  });

  return (
    <nav className={css(styles.navbar)}>
      <ul className={css(styles.ul)}>
        {props.children}
      </ul>
    </nav>
  )
}


Navbar.defaultProps = {
  background: 'bgBlue',
  padding: 'Space4'
}

const NavbarSecondary = (props) => {
  const styles = {
    background: "bgBlueLight",
    padding: "Space2"
  }

  return <Navbar { ...styles }>{ props.children }</Navbar>
}

const NavbarSub = (props) => {
  const styles = {
    background: "White",
  }

  const custom = {
    borderBottom: '1px solid',
    borderColor: colors.BorderLight,
    paddingTop: parseInt(spacing.Space2)*0.75,
    paddingBottom: parseInt(spacing.Space2)*0.75,
    justifyContent:'flex-start',
  }

  return <Navbar { ...styles } custom={custom}>{ props.children }</Navbar>
}


export {
  NavbarSecondary,
  NavbarSub
}

export default Navbar;

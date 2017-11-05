import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Button } from '../../../components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from '../../../common/styles/variables';

const Navbar = (props) => {

  const { content, weight, color, children, vertical } = props;

  const styles = StyleSheet.create({
    navbar:{
      backgroundColor: props.background,
      paddingTop: props.padding,
      paddingBottom: props.padding,
      width: '100%',
      display: 'flex',
      justifyContent:'flex-end',
      alignItems: 'center',
      ...props.custom
    },
    container:{
      width: '100%',
    },
    ul: {
      width: '100%',
      marginBottom: 0,
      paddingLeft: 0,
      display: 'flex',
      alignItems: vertical ? 'flex-start' : 'center',
      flexDirection: vertical ? 'column' : 'row',
    }
  });

  return (
    <nav className={css(styles.navbar)}>
      <div className={`${css(styles.container)} container`}>
        <ul className={css(styles.ul)}>
          {props.children}
        </ul>
      </div>
    </nav>
  )
}


Navbar.defaultProps = {
  background: colors.bgBlue,
  padding: spacing.space4,
}

const NavbarSecondary = (props) => {
  const styles = {
    background: colors.bgBlueLight,
    padding: props.padding,
  }

  return <Navbar { ...styles }>{ props.children }</Navbar>
}


Navbar.defaultProps = {
  background: colors.bgBlue,
  padding: spacing.space2,
}


const NavbarSub = (props) => {
  const styles = {
    background: colors.baseWhite,
    justifyContent:'flex-start',
  }

  const custom = {
    borderBottom: '1px solid',
    borderColor: colors.borderLight,
    paddingTop: parseInt(spacing.space2)*0.75,
    paddingBottom: parseInt(spacing.space2)*0.75,
    justifyContent:'flex-start',
  }

  return <Navbar { ...styles } custom={custom}>{ props.children }</Navbar>
}


export {
  NavbarSecondary,
  NavbarSub
}

export default Navbar;

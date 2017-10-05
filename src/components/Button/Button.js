import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from '../../common/styles/variables';
import { getHoverAttributes } from '../../utils/helpers'

function Button(props) {

  const { content, weight, color, children } = props;

  const styles = StyleSheet.create({
    Button:{
      padding: '15px 30px',
      borderRadius: '30px',
      borderWidth: '2px',
      borderStyle: 'solid',
      fontFamily: fonts.sans,
      cursor: 'pointer',
      textAlign: 'center',
      display: 'block',
      textTransform: 'uppercase',
    	fontSize: '11px',
      lineHeight: '14px',
    	fontWeight: fontWeight.bold,
    	letterSpacing: letterSpacing.base,
      color: colors[props.color],
      borderColor: colors[props.borderColor],
      backgroundColor: colors[props.backgroundColor],
      ...getHoverAttributes(props.hover, colors)
    }
  });

  return (
    <button className={css(styles.Button)} disabled={props.disabled || false}>
      { children }
    </button>
  )
}

Button.defaultProps = {
  color: 'White',
  borderColor: 'Primary',
  backgroundColor: 'Primary',
  hover: {
    backgroundColor: 'PrimaryHover',
    borderColor: 'PrimaryHover',
    color: 'White',
  }
}

const ButtonViewAll = (props) => {
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

ButtonViewAll.defaultProps = {
  color: 'BlueLight',
  borderColor: 'BlueLight',
  backgroundColor: 'Transparent',
  hover: {
    backgroundColor: 'BlueLightHover',
    borderColor: 'BlueLightHover',
    color: 'White',
  }
}


const ButtonPrimary = (props) => {
  const styles = {
    hover: {
      backgroundColor: 'PrimaryHover',
      borderColor: 'PrimaryHover',
    }
  }
  return (
    <Button { ...styles } >{ props.children }</Button>
  )
}

const ButtonOutline = (props) => {
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

ButtonOutline.defaultProps = {
  color: 'Primary',
  borderColor: 'Primary',
  backgroundColor: 'Transparent',
  hover: {
    backgroundColor: 'PrimaryHover',
    borderColor: 'PrimaryHover',
    color: 'White',
  }
}

const ButtonDonate = (props) => {
  const styles = {
    backgroundColor: 'Green',
    borderColor: 'Green',
    hover: {
      backgroundColor: 'GreenHover',
      borderColor: 'GreenHover'
    }
  }
  return (
    <Button { ...styles } >{ props.children }</Button>
  )
}

export {
  ButtonDonate,
  ButtonOutline,
  ButtonPrimary,
  ButtonViewAll
}
export default Button;

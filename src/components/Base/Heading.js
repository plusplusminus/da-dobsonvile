import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, letterSpacing, colors, spacing } from 'common/styles/variables';

function Heading(props) {

  const { children } = props;

  const styles = StyleSheet.create({
    Heading:{
      display: props.display,
      position: 'relative',
      textAlign: props.align,
      fontWeight: fontWeight[props.fontWeight],
      fontFamily: fonts[props.font],
      color: colors[props.color],
      letterSpacing: letterSpacing[props.letterSpacing],
      textTransform: props.transform,
      marginTop: spacing[props.mt],
      marginBottom: spacing[props.mb],
      marginLeft: spacing[props.ml],
      marginRight: spacing[props.mr],
      ...fontStyles(props.fs,props.lh),
    },
  });

  return (
    <span className={css(styles.Heading)}>{children}</span>
  )
}

Heading.defaultProps = {
  font: 'Sans',
  color: 'Heading',
  letterSpacing: 'None',
  fontWeight: 'Bold',
  align: 'left',
  textTransform: 'none',
  display:'block',
  mt: 'Space',
  mr: 'Space',
  mb: 'Space2',
  ml: 'Space',
  fs: '25px',
  lh: '32px',
  current: false
}

const HeadingAside = (props) => {
  const styles = {
    color: props.color,
    fs: '25px',
    lh: '32px',
    fontWeight: 'Bold',
    align: props.align,
  }
  return (
    <Heading { ...styles } >{ props.children }</Heading>
  )
}

HeadingAside.defaultProps = {
  color: 'Primary',
  align: 'left',
}

const HeadingHero = (props) => {
  const styles = {
    color: props.color,
    fs: '49px',
    lh: '59px',
    align: 'center',
    mt: 'Space15',
    mb: 'Space15',
  }
  return (
    <Heading { ...styles } >{ props.children }</Heading>
  )
}

HeadingHero.defaultProps = {
  color: 'White',
}

const HeadingMeta = (props) => {
  const styles = {
    color: props.color,
    fs: '13px',
    lh: '18px',
    mb: 'Space1',
    fontWeight: 'Normal',
    transform: props.transform,
    letterSpacing: props.letterSpacing
  }
  return (
    <Heading { ...styles } >{ props.children }</Heading>
  )
}

HeadingMeta.defaultProps = {
  color: 'Primary',
  transform: 'none',
  letterSpacing: 'None'
}

const HeadingSection = (props) => {
  const styles = StyleSheet.create({
    lineLeft:{
      position: 'relative',
      ':before': {
        width: spacing.Space10,
        content:'""',
        height:'1px',
        position: 'absolute',
        right: spacing.Space4,
        top: '50%',
        backgroundColor: colors[props.color],
      }
    },
    lineRight:{
      position: 'relative',
      ':after': {
        width: spacing.Space10,
        content:'""',
        height:'1px',
        position: 'absolute',
        left: spacing.Space4,
        top: '50%',
        backgroundColor: colors[props.color],
      }
    }
  })

  const style = {
    color: props.color,
    fs: '20px',
    lh: '24px',
    align: props.align,
    transform: props.transform,
    fontWeight: 'Medium',
    letterSpacing: props.letterSpacing,
    mb:'Space4',
  }

  return (
    <Heading { ...style } >
      { props.lineLeft && <span className={css(styles.lineLeft)}></span>}
      { props.children }
      { props.lineRight && <span className={css(styles.lineRight)}></span>}
    </Heading>
  )
}

HeadingSection.defaultProps = {
  color: 'Heading',
  align: 'center',
  transform: 'none',
  letterSpacing: 'Base',
  lineLeft: false,
  lineRight: false,
}

HeadingSection.propTypes = {
  color: PropTypes.string,
  align: PropTypes.string,
  transform: PropTypes.string,
  letterSpacing: PropTypes.string,
  lineLeft: PropTypes.bool,
  lineRight: PropTypes.bool,
}


const HeadingSmall = (props) => {
  const styles = {
    color: props.color,
    align: props.align,
    fs: '16px',
    lh: '22px',
    mb:'Space2',
  }
  return (
    <Heading { ...styles } >{ props.children }</Heading>
  )
}

HeadingSmall.defaultProps = {
  color: 'Heading',
  align: 'left',
}

const HeadingWidget = (props) => {
  const styles = {
    color: props.color,
    fs: '16px',
    lh: '30px',
    fontWeight: 'Bold',
  }
  return (
    <Heading { ...styles } >{ props.children }</Heading>
  )
}

HeadingWidget.defaultProps = {
  color: 'Heading',
}

export {
  HeadingAside,
  HeadingHero,
  HeadingMeta,
  HeadingSection,
  HeadingSmall,
  HeadingWidget,
}
export default Heading;

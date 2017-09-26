import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { HeadingHero, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';

const Hero = (props) => {
  const { content, heading, weight, color, children, visual } = props;
  const styles = StyleSheet.create({
    Hero:{
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    bg:{
      height: '100vh',
      paddingTop: spacing.Space10,
      paddingBottom: spacing.Space5,
      paddingLeft: '20%',
      paddingRight: '20%',
      textAlign: 'center',
      background: colors.bgLight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'rgba(0,0,0,0.3)',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(21,95,162,0.85) 100%)',
    },
  });

  return (
    <div className={css(styles.Hero)} style={{backgroundImage:`url(${visual})`}}>
      <div className={css(styles.bg)}>
        <HeadingHero>{ heading }</HeadingHero>
        <HeadingSection color={"White"} lineLeft lineRight>Take Action</HeadingSection>
        <div className="row justify-content-center">
          <div className="col-lg-3 text-center">
            <HeadingSmall color={"White"} align={"center"}>Contribute to our campaign cause</HeadingSmall>
            <NavText color={"BlueLight1"}>Donate</NavText>
          </div>
          <div className="col-lg-3 text-center">
            <HeadingSmall color={"White"} align={"center"}>Sign our petition to remove Zuma</HeadingSmall>
            <NavText color={"BlueLight1"}>Sign Petition</NavText>
          </div>
          <div className="col-lg-3 text-center">
            <HeadingSmall color={"White"} align={"center"}>Make a difference by joining the DA</HeadingSmall>
            <NavText color={"BlueLight1"}>Join Now</NavText>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  color: 'Copy',
}

export default Hero;

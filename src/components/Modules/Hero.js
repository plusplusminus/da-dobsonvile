import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { HeadingHero, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const Hero = (props) => {
  const { content, weight, color, children } = props;
  const styles = StyleSheet.create({
    Hero:{
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
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.3)',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(21,95,162,0.85) 100%)',
    },
  });

  return (
    <div className={css(styles.Hero)}>
      <HeadingHero>Firing Zuma is the first step towards building a better tomorrow</HeadingHero>
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
  )
}

Hero.defaultProps = {
  color: 'Copy',
}

export default Hero;

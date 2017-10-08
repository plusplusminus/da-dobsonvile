import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';
import { Heading, HeadingLines, MoreLink } from 'components';


const Hero = (props) => {
  const { heading, children, visual } = props;
  const styles = StyleSheet.create({
    hero:{
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    bg:{
      height: '100vh',
      paddingTop: spacing.space10,
      paddingBottom: spacing.space5,
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
    <div className={css(styles.hero)} style={{backgroundImage:`url(${visual})`}}>
      <div className={css(styles.bg)}>

        <Heading
          size={"huge"}
          color={"white"}
          mb={"huge"}
          center
        >
          { heading }
        </Heading>

        <HeadingLines lineLeft lineRight color={"white"} mb={"large"}>
          <Heading
            size={"medium"}
            color={"white"}
            center
          >
            Take Action
          </Heading>
        </HeadingLines>

        <div className="row justify-content-center">

          <div className="col-lg-3 text-center">
            <Heading
              color={"white"}
              size={"small"}
              mb={"small"}
              center
            >
              Contribute to our campaign cause
            </Heading>
            <MoreLink color={"yellow"} size="large" lowercase>Donate</MoreLink>
          </div>

          <div className="col-lg-3 text-center">
            <Heading
              color={"white"}
              size={"small"}
              mb={"small"}
              center
            >
              Sign our petition to remove Zuma
            </Heading>
            <MoreLink color={"yellow"} size="large" lowercase>Sign Petition</MoreLink>
          </div>

          <div className="col-lg-3 text-center">
            <Heading
              color={"white"}
              size={"small"}
              mb={"small"}
              center
            >
              Make a difference by joining the DA
            </Heading>
            <MoreLink color={"yellow"} size="large" lowercase>Join Us</MoreLink>
          </div>

        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
}

export default Hero;

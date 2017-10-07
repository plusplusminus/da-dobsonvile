import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';
import { Heading, MoreLink } from 'components';


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
          weight={"bold"}
          color={"white"}
        >
          { heading }
        </Heading>

        <Heading
          size={"medium"}
          weight={"bold"}
          color={"white"}
        >
          Take Action
        </Heading>

        <div className="row justify-content-center">

          <div className="col-lg-3 text-center">
            <Heading
              color={"white"}
              weight={"bold"}
              size={"small"}
            >
              Contribute to our campaign cause
            </Heading>
            <MoreLink color={"yellow"} size="large" lowercase>Donate</MoreLink>
          </div>

          <div className="col-lg-3 text-center">
            <Heading
              color={"white"}
              weight={"bold"}
              size={"small"}
            >
              Sign our petition to remove Zuma
            </Heading>
            <MoreLink color={"yellow"} size="large" lowercase>Donate</MoreLink>
          </div>

          <div className="col-lg-3 text-center">
            <Heading
              color={"white"}
              weight={"bold"}
              size={"small"}
            >
              Make a difference by joining the DA
            </Heading>
            <MoreLink color={"yellow"} size="large" lowercase>Donate</MoreLink>
          </div>

        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
}

export default Hero;

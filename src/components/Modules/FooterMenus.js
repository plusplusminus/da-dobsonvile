import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { HeadingSmall, NavText, NavIcon, NavItem } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const FooterMenus = (props) => {
  const { content, weight, col, children } = props;
  const styles = StyleSheet.create({
    footerMenus:{
      marginBottom: spacing.space3,
    },
    wrapper:{
      marginBottom: spacing.space5,
    },
    menu:{
      margin: spacing.space,
      padding: spacing.space,
    },
  });

  return (
    <div className={css(styles.footerMenus)}>
      <div className="row">
        <div className={`${css(styles.wrapper)} ${col}`}>
          <HeadingSmall color={"White"}>Contact Details</HeadingSmall>
          <div className={css(styles.menu)}>
            <NavIcon color={"White"} iconColor={"White"} iconName="mobile">+27 832 234 1232</NavIcon>
            <NavIcon color={"White"} iconColor={"White"} iconName="instagram">Instagram</NavIcon>
            <NavIcon color={"White"} iconColor={"White"} iconName="facebook">Facebook</NavIcon>
            <NavIcon color={"White"} iconColor={"White"} iconName="twitter">Twitter</NavIcon>
            <NavIcon color={"White"} iconColor={"White"} iconName="youtube">YouTube</NavIcon>
            <NavIcon color={"White"} iconColor={"White"} iconName="envelope">Email</NavIcon>
            <NavText color={"White"}>View all Contact Details</NavText>
          </div>
        </div>

        <div className={`${css(styles.wrapper)} ${col}`}>
          <HeadingSmall color={"White"}>About the DA</HeadingSmall>
          <ul className={css(styles.menu)}>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>Vision</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>Policies</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>Principles</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>History</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>Our Constitution</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>DA Youth</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>Blue, the Network</NavItem>
          </ul>
        </div>

        <div className={`${css(styles.wrapper)} ${col}`}>
          <HeadingSmall color={"White"}>Newsroom</HeadingSmall>
          <ul className={css(styles.menu)}>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>News</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>Speeches</NavItem>
          </ul>
        </div>

        <div className={`${css(styles.wrapper)} ${col}`}>
          <HeadingSmall color={"White"}>Campaigns</HeadingSmall>
          <ul className={css(styles.menu)}>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>Remove President Zuma</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>Social Grants Crisis</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>Education in the DA-led Western Cape</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>Vision 2029</NavItem>
            <NavItem ml={"Space"} mr={"Space"} mb={"Space1"} display={"block"} fontWeight={"Normal"}>A Rescue Mission for the Lost Generation</NavItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

FooterMenus.defaultProps = {
  col: 'col-lg',
}

FooterMenus.propTypes = {
  col: PropTypes.string,
}

export default FooterMenus;

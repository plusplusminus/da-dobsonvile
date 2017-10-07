import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Heading, MoreLink, NavIcon, NavItem } from 'components';
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
      margin: spacing.space0,
      padding: spacing.space0,
    },
  });

  return (
    <div className={css(styles.footerMenus)}>
      <div className="row">
        <div className={`${css(styles.wrapper)} ${col}`}>
          <Heading color={"white"} size={"tiny"} weight={"bold"} letterSpacing={"small"} mb={"tiny"} uppercase>Contact Details</Heading>
          <div className={css(styles.menu)}>
            <NavIcon color={"White"} iconColor={"White"} iconName="mobile">+27 832 234 1232</NavIcon>
            <NavIcon color={"White"} iconColor={"White"} iconName="instagram">Instagram</NavIcon>
            <NavIcon color={"White"} iconColor={"White"} iconName="facebook">Facebook</NavIcon>
            <NavIcon color={"White"} iconColor={"White"} iconName="twitter">Twitter</NavIcon>
            <NavIcon color={"White"} iconColor={"White"} iconName="youtube">YouTube</NavIcon>
            <NavIcon color={"White"} iconColor={"White"} iconName="envelope">Email</NavIcon>
            <MoreLink color={"white"} size="small" uppercase>View all Info</MoreLink>
          </div>
        </div>

        <div className={`${css(styles.wrapper)} ${col}`}>
          <Heading color={"white"} size={"tiny"} weight={"bold"} letterSpacing={"small"} mb={"tiny"} uppercase>About the DA</Heading>
          <ul className={css(styles.menu)}>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>Vision</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>Policies</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>Principles</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>History</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>Our Constitution</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>DA Youth</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>Blue, the Network</NavItem>
          </ul>
        </div>

        <div className={`${css(styles.wrapper)} ${col}`}>
          <Heading color={"white"} size={"tiny"} weight={"bold"} letterSpacing={"small"} mb={"tiny"} uppercase>Newsroom</Heading>
          <ul className={css(styles.menu)}>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>News</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>Speeches</NavItem>
          </ul>
        </div>

        <div className={`${css(styles.wrapper)} ${col}`}>
          <Heading color={"white"} size={"tiny"} weight={"bold"} letterSpacing={"small"} mb={"tiny"} uppercase>Campaigns</Heading>
          <ul className={css(styles.menu)}>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>Remove President Zuma</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>Social Grants Crisis</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>Education in the DA-led Western Cape</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>Vision 2029</NavItem>
            <NavItem ml={spacing.space0} mr={spacing.space0} mb={spacing.space1} display={"block"} fontWeight={fontWeight.light} color={colors.baseWhite}>A Rescue Mission for the Lost Generation</NavItem>
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

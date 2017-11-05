import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import Media from 'react-media';
import { Badge, Logo, NavbarSecondary, NavItem, Navbar, NavbarSub, MoreLink, Icon} from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";
import {default as ButtonTest} from 'components/Button'


const Masthead = (props) => {

  return (
    <nav>
      <Media query="(max-width: 767px)">
        {matches => matches ? (
          <NavbarSecondary padding={spacing.space1}>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} mr={"auto"} ml={spacing.space0}>
              <MoreLink color={"white"}  arrowDirection="left" lowercase size={"large"} weight={"regular"} tracking={"small"} size={"medium"}>Visit da.org.za</MoreLink>
            </NavItem>
            <NavItem fs={"16px"} lh={"16px"} color={colors.brandWhite}><Icon name="search" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-youtube"} /></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-instagram"} /></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-facebook"} /></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"} mr={spacing.space0}><span className={"icon icon-twitter"} /></NavItem>
          </NavbarSecondary>
        ) : (
          <NavbarSecondary>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} mr={"auto"} ml={spacing.space0}>
              <MoreLink color={"white"}  arrowDirection="left" lowercase size={"large"} weight={"regular"} tracking={"small"} size={"medium"}>Visit da.org.za</MoreLink>
            </NavItem>
            <NavItem fs={"16px"} lh={"16px"} color={colors.brandWhite}><Icon name="search" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}>Why the DA?</NavItem>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}>Where We Govern</NavItem>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}>Our People</NavItem>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}>Newsroom</NavItem>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} mr={spacing.space0}>Contact</NavItem>
          </NavbarSecondary>
        )}
      </Media>
      <Media query={{maxWidth: 767}} render={() => (
        <Navbar padding={spacing.space2}>
          <NavItem mr={"auto"} ml={spacing.space0}><Logo division={"Western Cape"} size="80px"/></NavItem>
          <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline iconBefore={"close"} size="small">Menu</ButtonTest></NavItem>
        </Navbar>
      )}/>
      <Media query={{minWidth: 768, maxWidth: 991}} render={() => (
        <Navbar>
          <NavItem mr={"auto"} ml={spacing.space0}><Logo division={"Western Cape"} size="100px"/></NavItem>
          <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} mr={spacing.space0}><ButtonTest color={"green"}>Donate</ButtonTest></NavItem>
          <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline iconBefore={"bars"}>Menu</ButtonTest></NavItem>
        </Navbar>
      )}/>
      <Media query={{minWidth: 992}} render={() => (
          <Navbar>
            <NavItem mr={"auto"} ml={spacing.space0}><Logo division={"Western Cape"}/></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"} href={"#"}><span className={"icon icon-youtube"} /></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"} href={"#"}><span className={"icon icon-instagram"} /></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"} href={"#"}><span className={"icon icon-facebook"} /></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"} href={"#"}><span className={"icon icon-twitter"} /></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} href={"#"}>Campaigns</NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} mr={spacing.space0}><ButtonTest color={"green"}>Donate</ButtonTest></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline>Get Involved</ButtonTest></NavItem>
            <NavItem mr={spacing.space0} ml={spacing.space2}><Badge status={"neutral"}/></NavItem>
          </Navbar>
      )}/>
      <NavbarSub>
        <NavItem fontWeight={fontWeight.medium} color={colors.linkBlue} fs={"13px"} lh={"16px"} ml={spacing.space0} href={"#"}>Bokamoso</NavItem>
        <NavItem fontWeight={fontWeight.medium} color={colors.linkBlue} fs={"13px"} lh={"16px"} href={"#"}>Speeches</NavItem>
        <NavItem fontWeight={fontWeight.medium} color={colors.linkBlue} fs={"13px"} lh={"16px"} href={"#"}>Archive</NavItem>
        <NavItem fontWeight={fontWeight.medium} color={colors.linkBlue} ml={"auto"} mr={spacing.space0}>
          <MoreLink color={"blue"} size={"medium"} lowercase tracking={"small"} weight={"regular"}><a href={"#"}>Subscribe to Bokamoso</a></MoreLink>
        </NavItem>
      </NavbarSub>
      <Media query={{maxWidth: 767}} render={() => (
        <Navbar padding={spacing.space2} vertical background={colors.bgLight}>
          <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0">Campaigns</NavItem>
          <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0">Get Involved</NavItem>
          <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0">Why the DA?</NavItem>
          <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0">Where We Govern</NavItem>
          <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0">Our People</NavItem>
          <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0">Newsroom</NavItem>
          <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0">Contact</NavItem>
        </Navbar>
      )}/>
    </nav>
  );
}

Masthead.propTypes = {
};

Masthead.defaultProps = {
};

export default Masthead;

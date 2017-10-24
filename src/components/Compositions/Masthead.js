import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Logo, NavbarSecondary, NavItem, Navbar, NavbarSub, MoreLink, Icon} from "components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";
import {default as ButtonTest} from 'components/Button'


const Masthead = (props) => {

  return (
    <nav>
      <NavbarSecondary>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} mr={"auto"} ml={spacing.space0}>
          <MoreLink color={"white"}  arrowDirection="left" lowercase size={"large"} weight={"regular"} tracking={"small"} size={"medium"}>Visit da.org.za</MoreLink>
        </NavItem>
        <NavItem fs={"16px"} lh={"16px"} color={colors.brandWhite}><a><Icon name="search" mr={spacing.space0} ml={spacing.space0}/></a></NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Why the DA?</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Where We Govern</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Our People</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite}><a>Newsroom</a></NavItem>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} mr={spacing.space0}><a>Contact</a></NavItem>
      </NavbarSecondary>
      <Navbar>
        <NavItem mr={"auto"} ml={spacing.space0}><Logo /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-youtube"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-instagram"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-facebook"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-twitter"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite}>Campaigns</NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline>Get Involved</ButtonTest></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} mr={spacing.space0}><ButtonTest color={"green"}>Donate</ButtonTest></NavItem>
      </Navbar>
      <NavbarSub>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} fs={"13px"} lh={"16px"} ml={spacing.space0}>Bokamoso</NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} fs={"13px"} lh={"16px"}>Speeches</NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} fs={"13px"} lh={"16px"}>Archive</NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} ml={"auto"} mr={spacing.space0}>
          <MoreLink color={"blue"} size={"medium"} lowercase tracking={"small"} weight={"regular"}>Subscribe to Bokamoso</MoreLink>
        </NavItem>
      </NavbarSub>
    </nav>
  );
}

Masthead.propTypes = {
};

Masthead.defaultProps = {
};

export default Masthead;

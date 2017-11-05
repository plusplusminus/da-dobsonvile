import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { Badge, Logo, NavbarSecondary, NavItem, Navbar, NavbarSub, MoreLink, Icon, ButtonTest} from "../../components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const Masthead = (props) => {

  return (
    <nav>
      <NavbarSecondary>
        <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} mr={"auto"} ml={spacing.space0}>
          <MoreLink color={"white"}  arrowDirection="left" lowercase size={"large"} weight={"regular"} tracking={"small"} size={"medium"}>Visit da.org.za</MoreLink>
        </NavItem>
      </NavbarSecondary>
      <Navbar>
        <NavItem mr={"auto"} ml={spacing.space0}><Logo division={"Western Cape"}/></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-youtube"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-instagram"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-facebook"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite} fs={"18px"}><span className={"icon icon-twitter"} /></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.baseWhite}>Campaigns</NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline>Get Involved</ButtonTest></NavItem>
        <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} mr={spacing.space0}><ButtonTest color={"green"}>Donate</ButtonTest></NavItem>
        <NavItem mr={spacing.space0} ml={spacing.space2}><Badge status={"neutral"}/></NavItem>
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

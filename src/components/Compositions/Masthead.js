import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import Media from 'react-media';
import { Badge, Logo, NavbarSecondary, NavItem, Navbar, NavbarSub, MoreLink, Icon, ButtonTest} from "../../components";
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity, media } from "../../common/styles/variables";

const Masthead = (props) => {

  return (
    <nav>
      <Media query="(max-width: 767px)">
        {matches => matches ? (
          <NavbarSecondary padding={spacing.space1}>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} mr={"auto"} ml={spacing.space0}>
              <MoreLink color={"white"}  arrowDirection="left" lowercase size={"large"} weight={"regular"} tracking={"small"} size={"medium"} href={"#"}>Visit da.org.za</MoreLink>
            </NavItem>
            <NavItem color={colors.textLightO} fs={"18px"} href={"#"}><Icon name="search" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem color={colors.textLightO} fs={"18px"} href={"#"}><Icon name="youtube" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem color={colors.textLightO} fs={"18px"} href={"#"}><Icon name="instagram" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem color={colors.textLightO} fs={"18px"} href={"#"}><Icon name="facebook" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem color={colors.textLightO} fs={"18px"} href={"#"} mr={spacing.space0} mr={spacing.space0} ml={spacing.space0}><Icon name="twitter"/></NavItem>
          </NavbarSecondary>
        ) : (
          <NavbarSecondary>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} mr={"auto"} ml={spacing.space0}>
              <MoreLink color={"white"}  arrowDirection="left" lowercase size={"large"} weight={"regular"} tracking={"small"} size={"medium"} href={"#"}>Visit da.org.za</MoreLink>
            </NavItem>
            <NavItem fs={"16px"} lh={"16px"} color={colors.brandWhite} href={"#"}><Icon name="search" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} href={"#"}>Why the DA?</NavItem>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} href={"#"}>Where We Govern</NavItem>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} href={"#"}>Our People</NavItem>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} href={"#"}>Newsroom</NavItem>
            <NavItem fs={"13px"} lh={"16px"} color={colors.brandWhite} href={"#"} mr={spacing.space0}>Contact</NavItem>
          </NavbarSecondary>
        )}
      </Media>
      <Media query={{maxWidth: 767}} render={() => (
        <Navbar padding={spacing.space2}>
          <NavItem mr={"auto"} ml={spacing.space0} href={"#"}><Logo division={"Western Cape"} size="80px"/></NavItem>
          <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline iconBefore={"close"} size="small">Menu</ButtonTest></NavItem>
        </Navbar>
      )}/>
      <Media query={{minWidth: 768, maxWidth: 991}} render={() => (
        <Navbar>
          <NavItem mr={"auto"} ml={spacing.space0} href={"#"}><Logo division={"Western Cape"} size="100px"/></NavItem>
          <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} mr={spacing.space0}><ButtonTest color={"green"}>Donate</ButtonTest></NavItem>
          <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline iconBefore={"bars"}>Menu</ButtonTest></NavItem>
        </Navbar>
      )}/>
      <Media query={{minWidth: 992}} render={() => (
          <Navbar>
            <NavItem mr={"auto"} ml={spacing.space0} href={"#"}><Logo division={"Western Cape"}/></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.textLightO} fs={"18px"} href={"#"}><Icon name="youtube" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.textLightO} fs={"18px"} href={"#"}><Icon name="instagram" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.textLightO} fs={"18px"} href={"#"}><Icon name="facebook" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.textLightO} fs={"18px"} href={"#"}><Icon name="twitter" mr={spacing.space0} ml={spacing.space0}/></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.textLightO} href={"#"}>Campaigns</NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue} mr={spacing.space0}><ButtonTest color={"green"}>Donate</ButtonTest></NavItem>
            <NavItem fontWeight={fontWeight.bold} color={colors.linkBlue}><ButtonTest color="white" outline>Get Involved</ButtonTest></NavItem>
            <NavItem mr={spacing.space0} ml={spacing.space2}><Badge status={"neutral"}/></NavItem>
          </Navbar>
      )}/>
      <NavbarSub>
        <NavItem fontWeight={fontWeight.medium} color={colors.linkBlue} fs={"13px"} lh={"16px"} ml={spacing.space0} href={"#"}>Bokamoso</NavItem>
        <NavItem fontWeight={fontWeight.medium} color={colors.linkBlue} fs={"13px"} lh={"16px"} href={"#"}>Speeches</NavItem>
        <NavItem fontWeight={fontWeight.medium} color={colors.linkBlue} fs={"13px"} lh={"16px"} href={"#"}>Archive</NavItem>
        <NavItem fontWeight={fontWeight.medium} color={colors.linkBlue} ml={"auto"} mr={spacing.space0} href={"#"}>
          <MoreLink color={"blue"} size={"medium"} lowercase tracking={"small"} weight={"regular"}>Subscribe to Bokamoso</MoreLink>
        </NavItem>
      </NavbarSub>
      <Media query={{maxWidth: 767}} render={() => (
        <div>
          <Navbar padding={spacing.space2} vertical background={colors.bgLight}>
            <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0" href={"#"}>Campaigns</NavItem>
            <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0" href={"#"}>Get Involved</NavItem>
            <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0" href={"#"}>Why the DA?</NavItem>
            <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0" href={"#"}>Where We Govern</NavItem>
            <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0" href={"#"}>Our People</NavItem>
            <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0" href={"#"}>Newsroom</NavItem>
            <NavItem fs={"13px"} lh={"16px"} mt={spacing.space1} mb={spacing.space2} color={colors.linkBlue} ml="0" mr="0" href={"#"}>Contact</NavItem>
          </Navbar>
          <ButtonTest color={"green"} mt={spacing.space4} full>Donate</ButtonTest>
        </div>
      )}/>
    </nav>
  );
}

Masthead.propTypes = {
};

Masthead.defaultProps = {
};

export default Masthead;

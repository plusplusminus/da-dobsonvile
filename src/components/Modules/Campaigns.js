import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, Copy, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const Campaigns = (props) => {

  const styles = StyleSheet.create({
    Campaigns:{
      display: 'block',
    },
    Campaign:{
      display: 'block',
      marginBottom: spacing.Space5,
    },
    CampaignImage:{
      display: 'block',
      float: 'left',
      marginRight: spacing.Space4,
      marginBottom: spacing.Space4,
      paddingBottom: '60%',
      width: '100%',
      backgroundColor: colors.Blue,
    },
    ViewAll:{
      width: '100%',
      paddingTop: spacing.Space5,
      marginTop: spacing.Space2,
      marginBottom: spacing.Space2,
      borderTop: '1px solid',
      borderColor: colors.BorderLight,
      textAlign: 'center',
    }
  });

  return (
    <div className={css(styles.Campaigns)}>

      <div className={css(styles.Campaign)}>
        <HeadingSection color={"Red"} align={"left"} lineLeft>Latest Campaigns</HeadingSection>
        <HeadingMeta color={"Primary"} transform={"uppercase"} letterSpacing={"Base"}>National Campaign</HeadingMeta>
        <Heading color={"Primary"}>Petition to Protect Women</Heading>
        <div className="row">
          <div className="col-sm-3">
            <div className={css(styles.CampaignImage)}></div>
          </div>
          <div className="col-sm-9">
            <Copy>The ANC-led national government is failing our mothers, daughters and sisters. Sign this petition to join the DA’s call for a justice system that is fixed and works for all, and where our police and magistrates are supported.</Copy>
            <NavText color={"Red"}>Join the fight</NavText>
          </div>
        </div>
      </div>

      <div className={css(styles.Campaign)}>
        <HeadingMeta color={"Primary"} transform={"uppercase"} letterSpacing={"Base"}>National Campaign</HeadingMeta>
        <Heading color={"Primary"}>Petition to Protect Women</Heading>
        <div className="row">
          <div className="col-sm-3">
            <div className={css(styles.CampaignImage)}></div>
          </div>
          <div className="col-sm-9">
            <Copy>The ANC-led national government is failing our mothers, daughters and sisters. Sign this petition to join the DA’s call for a justice system that is fixed and works for all, and where our police and magistrates are supported.</Copy>
            <NavText color={"Red"}>Join the fight</NavText>
          </div>
        </div>
      </div>

      <div className={css(styles.ViewAll)}>
        <ButtonViewAll>View All Campaigns</ButtonViewAll>
      </div>

    </div>
  )
}

export default Campaigns;

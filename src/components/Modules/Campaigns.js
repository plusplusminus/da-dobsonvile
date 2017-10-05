import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, CardCampaign, Copy, Heading, HeadingMeta, HeadingSmall, HeadingSection, NavText, ViewAll } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';

const Campaigns = (props) => {

  const styles = StyleSheet.create({
    campaigns:{
      display: 'block',
      marginBottom: spacing.space2,
    },
  });

  return (
    <section className={css(styles.campaigns)}>
      <HeadingSection color={"Red"} align={"left"} textTransform={"uppercase"} lineLeft>Latest Campaigns</HeadingSection>
      <CardCampaign
        visual={<img className="img-fluid" src={ dobsonville } alt="alt" />}
        meta={<HeadingMeta color={"Primary"} textTransform={"uppercase"} letterSpacing={"Base"}>{"Western Cape"}</HeadingMeta>}
        heading={<Heading color={"Primary"}>{"Fermentum Sem Mollis Pharetra"}</Heading>}
        body={<Copy>{"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."}</Copy>}
        cta={<NavText color={"Red"} display={"block"}>{"Join the fight"}</NavText>}
      />
      <CardCampaign
        visual={<img className="img-fluid" src={ dobsonville } alt="alt" />}
        meta={<HeadingMeta color={"Primary"} textTransform={"uppercase"} letterSpacing={"Base"}>{"Western Cape"}</HeadingMeta>}
        heading={<Heading color={"Primary"}>{"Fermentum Sem Mollis Pharetra"}</Heading>}
        body={<Copy>{"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."}</Copy>}
        cta={<NavText color={"Red"} display={"block"}>{"Join the fight"}</NavText>}
      />
      <CardCampaign
        visual={<img className="img-fluid" src={ dobsonville } alt="alt" />}
        meta={<HeadingMeta color={"Primary"} textTransform={"uppercase"} letterSpacing={"Base"}>{"Western Cape"}</HeadingMeta>}
        heading={<Heading color={"Primary"}>{"Fermentum Sem Mollis Pharetra"}</Heading>}
        body={<Copy>{"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."}</Copy>}
        cta={<NavText color={"Red"} display={"block"}>{"Join the fight"}</NavText>}
      />
      <ViewAll buttonLabel="View all Campaigns"/>
    </section>
  )
}

export default Campaigns;

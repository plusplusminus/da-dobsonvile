import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, CardCampaign, Copy, Heading, HeadingLines, MoreLink, ViewAll } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';

const Campaigns = (props) => {

  const styles = StyleSheet.create({
    campaigns:{
      display: 'block',
    },
  });

  return (
    <section className={css(styles.campaigns)}>

      <HeadingLines lineLeft color={"red"} mb={"large"}>
        <Heading
          color={"red"}
          tracking={"huge"}
          size={"tiny"}
          weight={"light"}
          uppercase
        >
          Latest Campaigns
        </Heading>
      </HeadingLines>

      <CardCampaign
        imageUrl={dobsonville}
        meta="Western Cape"
        title="Firing Zuma is the first step towards building a better tomorrow"
        paragraph="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."
        cta="Join the fight"
        url={"/"}
      />

      <CardCampaign
        imageUrl={dobsonville}
        meta="Western Cape"
        title="Firing Zuma is the first step towards building a better tomorrow"
        paragraph="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."
        cta="Join the fight"
        url={"/"}
      />

      <CardCampaign
        imageUrl={dobsonville}
        meta="Western Cape"
        title="Firing Zuma is the first step towards building a better tomorrow"
        paragraph="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."
        cta="Join the fight"
        url={"/"}
      />

      <ViewAll>View all Campaigns</ViewAll>

    </section>
  )
}

export default Campaigns;

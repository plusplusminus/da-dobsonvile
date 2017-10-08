import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, CardCampaign, Copy, Heading, HeadingLines, MoreLink, ViewAll } from 'components';

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
        visual={<img className="img-fluid" src={ dobsonville } alt="alt" />}
        meta={<Heading color={"blue"} size={"tiny"} letterSpacing={"small"} weight={"regular"} tracking={"small"} uppercase>{"Western Cape"}</Heading>}
        heading={<Heading color={"blue"} mb={"small"} size={"large"} weight={"bold"}>{"Fermentum Sem Mollis Pharetra"}</Heading>}
        body={<Copy>{"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."}</Copy>}
        cta={<MoreLink>{"Join the fight"}</MoreLink>}
      />

      <CardCampaign
        visual={<img className="img-fluid" src={ dobsonville } alt="alt" />}
        meta={<Heading color={"blue"} size={"tiny"} letterSpacing={"small"} weight={"regular"} tracking={"small"} uppercase>{"Western Cape"}</Heading>}
        heading={<Heading color={"blue"} mb={"small"} size={"large"} weight={"bold"}>{"Fermentum Sem Mollis Pharetra"}</Heading>}
        body={<Copy>{"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."}</Copy>}
        cta={<MoreLink>{"Join the fight"}</MoreLink>}
      />

      <CardCampaign
        visual={<img className="img-fluid" src={ dobsonville } alt="alt" />}
        meta={<Heading color={"blue"} size={"tiny"} letterSpacing={"small"} weight={"regular"} tracking={"small"} uppercase>{"Western Cape"}</Heading>}
        heading={<Heading color={"blue"} mb={"small"} size={"large"} weight={"bold"}>{"Fermentum Sem Mollis Pharetra"}</Heading>}
        body={<Copy>{"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."}</Copy>}
        cta={<MoreLink>{"Join the fight"}</MoreLink>}
      />

      <ViewAll>View all Campaigns</ViewAll>

    </section>
  )
}

export default Campaigns;

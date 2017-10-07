import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { ButtonViewAll, CardVideo, Copy, Heading, HeadingMeta, HeadingSmall, HeadingSection, MoreLink, ViewAll } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';


const Videos = (props) => {

  const styles = StyleSheet.create({
    videos:{
      display: 'block',
      marginBottom: spacing.space2,
    },
  });

  return (
    <section className={css(styles.videos)}>
      <div className="row">
        <div className="col-md-8">
          <CardVideo
            featured
            visual={<img width={"100%"} className="img-fluid" src={ dobsonville } alt="alt" />}
            heading={<Heading color={"white"} mb={"small"}>{"Fermentum Sem Mollis Pharetra"}</Heading>}
            body={<Copy color={colors.baseWhite}>{"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor."}</Copy>}
            cta={<MoreLink color={"white"}>{"Play Video"}</MoreLink>}
          />
        </div>
        <div className="col-md-4">
          <CardVideo
            visual={<img className="img-fluid" src={ dobsonville } alt="alt" />}
            heading={<Heading color={"white"} size={"small"}>{"Fermentum Sem Mollis Pharetra"}</Heading>}
          />
          <CardVideo
            visual={<img className="img-fluid" src={ dobsonville } alt="alt" />}
            heading={<Heading color={"white"} size={"small"}>{"Fermentum Sem Mollis Pharetra"}</Heading>}
          />
        </div>
      </div>

      <ViewAll
        borderColor={colors.borderWhiteO}
        buttonColor={"white"}
      >View all Videos</ViewAll>
    </section>
  )
}

export default Videos;

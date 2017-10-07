import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Heading, HeadingMeta, HeadingSmall, HeadingSection } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const CardCampaign = (props) => {

  const { body, copy, cta, heading, meta, visual } = props;

  const styles = StyleSheet.create({
    cardCampaign:{
      display: 'block',
      marginBottom: spacing.space6,
    },
    visual:{
      display: 'block',
      float: 'left',
      // Should only be on responsive
      // marginBottom: spacing.space4,
    },
  });

  return (
    <div className={css(styles.cardCampaign)}>
      <div>
        { meta }
        { heading }
      </div>
      <div className="row">
        { visual &&
          <div className="col-sm-3">
            <div className={css(styles.visual)}>{ visual }</div>
          </div>
        }
        <div className="col-sm-9">
          { body }
          { cta }
        </div>
      </div>
    </div>
  )
}


CardCampaign.defaultProps = {
  body: null,
  heading: null,
  meta: null,
  visual: null,
}

CardCampaign.propTypes = {
  body: PropTypes.string,
  heading: PropTypes.string,
  meta: PropTypes.string,
  visual: PropTypes.string,
};

export default CardCampaign;

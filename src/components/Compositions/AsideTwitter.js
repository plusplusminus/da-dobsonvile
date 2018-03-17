import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Button, Copy, Heading, Icon, MoreLink } from 'components';

import {default as ButtonTest} from 'components/Button'
import { colors, fontWeight, spacing } from 'common/styles/variables';

const AsideTwitter = (props) => {

  const { heading, copy, buttonLabel, visual, children } = props;

  const styles = StyleSheet.create({
    aside:{
      marginBottom: spacing.space4,
      borderLeft: '1px solid',
      borderColor: colors.borderBase,
      paddingLeft: spacing.space4,
      paddingBottom: spacing.space2,
    },
    tweet:{
      marginBottom: spacing.space4,
    },
  });

  return (
    <aside className={css(styles.aside)}>
      <Icon name="twitter" color={colors.socialTwitter} fs={"22px"} mr={spacing.space2}/>
      <Heading
        size="tiny"
        mb="medium"
        weight="regular"
        tracking="large"
        inline
        uppercase
      >
        { heading }
      </Heading>

      { children }

    </aside>
  )
}

AsideTwitter.defaultProps = {
  buttonLabel: 'View All',
  copy: 'Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.',
  heading: 'Heading',
}

AsideTwitter.propTypes = {
  buttonLabel: PropTypes.string,
  copy: PropTypes.string,
  heading: PropTypes.string,
}

export default AsideTwitter;

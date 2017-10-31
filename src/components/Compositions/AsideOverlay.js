import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Button, Copy, Heading } from 'components';
import { colors, fontWeight, spacing } from 'common/styles/variables';

import {default as ButtonTest} from 'components/Button'

function AsideOverlay(props) {

  const { title, headingColor, paragraph, copyColor, cta, copyWeight, imageUrl } = props;

  const styles = StyleSheet.create({
    asideOverlay:{
      borderRadius: spacing.space1,
      marginBottom: spacing.space4,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    bg:{
      borderRadius: spacing.space1,
      backgroundColor: colors.bgDarkO,
      paddingTop: spacing.space9,
      paddingRight: spacing.space2,
      paddingBottom: spacing.space9,
      paddingLeft: spacing.space2,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
  });

  return (
    <aside className={css(styles.asideOverlay)} style={{backgroundImage:`url(${imageUrl})`}}>
      <div className={css(styles.bg)}>
      { title &&
          <Heading
            color={"white"}
            size={"large"}
            mb={"small"}
            center
          >
            { title }
          </Heading>
        }

        { paragraph &&
          <Copy
            color={"white"}
            weight={"bold"}
            mb={"large"}
            center
          >
            { paragraph }
          </Copy>
        }

        { cta &&
          <ButtonTest
            color="white"
            center
          >
            { cta }
          </ButtonTest>
        }
      </div>
    </aside>
  )
}

AsideOverlay.defaultProps = {
  cta: 'View All',
  paragraph: 'Find out more about DAs delivery record',
  title: 'Heading',
}

AsideOverlay.propTypes = {
  cta: PropTypes.string,
  paragraph: PropTypes.string,
  title: PropTypes.string,
}

export default AsideOverlay;

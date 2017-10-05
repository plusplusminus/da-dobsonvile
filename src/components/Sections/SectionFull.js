import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const sectionFull = (props) => {
  const { heading, section, col, visual } = props;
  const styles = StyleSheet.create({
    sectionFull:{
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
    bg:{
      paddingTop: props.pt,
      paddingBottom: props.pb,
      backgroundColor: props.backgroundColor,
    },
  });

  return (
    <section className={css(styles.sectionFull)} style={{backgroundImage:`url(${visual})`}}>
      <div className={css(styles.bg)}>
        <div className="container">
          <div className="row">
            <section className={`${col}`}>
              { heading && heading }
              { section }
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

sectionFull.defaultProps = {
  backgroundColor: colors.bgLight,
  col: 'col-12',
  heading: null,
  section: null,
  pt: spacing.space15,
  pb: spacing.space15,
  visual: null,
}

sectionFull.propTypes = {
  backgroundColor: PropTypes.string,
  col: PropTypes.string,
  heading: PropTypes.string,
  section: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  visual: PropTypes.string,
}

export default sectionFull;

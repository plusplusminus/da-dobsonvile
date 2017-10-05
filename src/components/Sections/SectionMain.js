import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { MoreLink, SectionMainLegal, SectionMainMenus } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const SectionMain = (props) => {
  const { aside, colMain, colAside, main } = props;
  const styles = StyleSheet.create({
    sectionMain:{
      paddingTop: props.pt,
      paddingBottom: props.pt,
    },
    section:{
    },
    aside:{
    }
  });

  return (
    <main className={css(styles.sectionMain)}>
      <div className="container">
        <div className="row">
          <section className={`${css(styles.section)} ${colMain}`}>
            { main }
          </section>
          <aside className={`${css(styles.aside)} ${colAside}`}>
            { aside }
          </aside>
        </div>
      </div>
    </main>
  )
}

SectionMain.defaultProps = {
  colMain: 'col-md-7',
  colAside: 'col-md-4 offset-md-1',
  pt: spacing.pace10,
  pb: spacing.space15,
}

SectionMain.propTypes = {
  pt: PropTypes.string,
  pb: PropTypes.string,
}

export default SectionMain;

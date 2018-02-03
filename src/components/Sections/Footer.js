import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FooterLegal, FooterMenus } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const Footer = (props) => {
  const { children } = props;
  const styles = StyleSheet.create({
    footer:{
    },
    menus:{
      paddingTop: spacing.space6,
      paddingBottom: spacing.space3,
      backgroundColor: colors.bgBlueLight,
      display: 'inline-block',
      width: '100%',
    },
    legal:{
      backgroundColor: colors.bgBlue,
      display: 'inline-block',
      width: '100%',
    }
  });

  return (
    <footer className={css(styles.footer)}>
      <div className={css(styles.menus)}>
        <div className="container">
          <FooterMenus />
        </div>
      </div>
      <div className={css(styles.legal)}>
        <div className="container">
          <FooterLegal />
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  color: 'Copy',
}

export default Footer;

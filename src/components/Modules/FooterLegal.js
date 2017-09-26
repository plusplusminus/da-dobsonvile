import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { HeadingSmall, NavText, NavIcon, NavItem } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const FooterLegal = (props) => {
  const { content, weight, color, children } = props;
  const styles = StyleSheet.create({
    footerLegal:{
      marginBottom: spacing.Space3,
      color: colors.White,
    },
    legal:{
      ...fontStyles('11px','30px'),
    },
    attribution:{
      textAlign: 'right',
      display: 'block',
      ...fontStyles('11px','30px'),
    }
  });

  return (
    <div className={css(styles.footerLegal)}>
      <div className="row">
        <div className="col-lg">
          <small className={css(styles.legal)}>© 2017 Democratic Alliance  |  All Rights Reserved  |  Sitemap Disclaimer</small>
        </div>
        <div className="col-lg">
          <small className={css(styles.attribution)}>Created by the friendly people at PlusPlusMinus</small>
        </div>
      </div>
    </div>
  )
}

FooterLegal.defaultProps = {
  color: 'Copy',
}

export default FooterLegal;

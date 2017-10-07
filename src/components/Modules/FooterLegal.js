import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { HeadingSmall, NavText, NavIcon, NavItem } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const FooterLegal = (props) => {
  const { content, children } = props;
  const styles = StyleSheet.create({
    footerLegal:{
      fontFamily: fonts.sans,

      marginBottom: spacing.space3,
      color: colors.baseWhite,
    },
    legal:{
      fontWeight: fontWeight.light,
      ...fontStyles('11px','30px'),
    },
    attribution:{
      textAlign: 'right',
      display: 'block',
      fontWeight: fontWeight.light,
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
}

export default FooterLegal;

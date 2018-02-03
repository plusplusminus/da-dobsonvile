import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { HeadingSmall, NavText, NavIcon, NavItem } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const FooterLegal = (props) => {
  const { content, children } = props;
  const styles = StyleSheet.create({
    footerLegal:{
      fontFamily: fonts.sans,
      marginTop: spacing.space3,
      marginBottom: spacing.space3,
      color: colors.baseWhite,
    },
    legal:{
      fontWeight: fontWeight.light,
      ...fontStyles('11px','30px'),
      display: 'inline-block',
      textAlign: 'center',
      width: '100%',
      '@media (min-width: 992px)': {
        textAlign: 'left',
      }
    },
    attribution:{
      textAlign: 'right',
      display: 'block',
      fontWeight: fontWeight.light,
      ...fontStyles('11px','30px'),
      display: 'inline-block',
      textAlign: 'center',
      width: '100%',
      '@media (min-width: 992px)': {
        textAlign: 'right',
      }
    }
  });

  return (
    <div className={css(styles.footerLegal)}>
      <div className="row">
        <div className="col-lg">
          <small className={css(styles.legal)}>© 2018 Democratic Alliance  |  All Rights Reserved</small>
        </div>
        <div className="col-lg">
          <small className={css(styles.attribution)}>Created by the friendly people at <a href="http://www.plusplusminus.co.za/?utm_source=DAShop&utm_medium=Footer&utm_campaign=Credit" style={{color: '#fff'}}>PlusPlusMinus</a></small>
        </div>
      </div>
    </div>
  )
}

FooterLegal.defaultProps = {
}

export default FooterLegal;

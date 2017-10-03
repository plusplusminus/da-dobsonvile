import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavIcon, Widget } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';

const ArticleShare = (props) => {

  const styles = StyleSheet.create({
    articleShare:{
      display: 'block',
      marginBottom: spacing.Space2,
      paddingTop: spacing.Space4,
      borderColor: colors.Border,
    },
  });

  return (
    <footer className={css(styles.articleShare)}>
      <Widget
        widgetTitle={"Direct Link"}
        widgetTitleColor={"Primary"}
        colTitle={"col-md-12"}
        colSection={"col-md-12"}>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="link" placeholder="https://da.org.za/news/corruption/article-name" readonly></input>
          </div>
        </form>
      </Widget>
      <Widget
        widgetTitle={"Share"}
        widgetTitleColor={"Primary"}
        colTitle={"col-md-12"}
        colSection={"col-md-12"}>
        <div className="row">
          <div className="col-md-3">
            <NavIcon iconName="facebook" iconColor="socialFacebook">{"Share on Facebook"}</NavIcon>
            <NavIcon iconName="twitter" iconColor="socialTwitter">{"Share on Twitter"}</NavIcon>
            <NavIcon iconName="envelope" iconColor="socialEmail">{"Send by Email"}</NavIcon>
            <NavIcon iconName="whatsapp" iconColor="socialWhatsApp">{"Share with What's App"}</NavIcon>
          </div>
          <div className="col-md-3">
            <NavIcon iconName="print" iconColor="Primary">{"Print"}</NavIcon>
            <NavIcon iconName="bookmark" iconColor="Primary">{"Bookmark"}</NavIcon>
            <NavIcon iconName="download" iconColor="Primary">{"Download"}</NavIcon>
            <NavIcon iconName="newspaper" iconColor="Primary">{"Journalist sign up"}</NavIcon>
          </div>
        </div>
      </Widget>
    </footer>
  )
}

export default ArticleShare;

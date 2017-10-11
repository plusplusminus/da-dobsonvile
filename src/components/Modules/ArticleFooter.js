import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Border, CardRelated, Widget, Tag, NavIcon } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';

const ArticleFooter = (props) => {

  const styles = StyleSheet.create({
    articleFooter:{},
    articleDetails:{},
    articleShare:{}
  })

  return (
    <footer className={css(styles.articleFooter)}>
      <section className={css(styles.articleDetails)}>
        <Widget
          colTitle={"col-md-3"}
          colSection={"col-md-9"}
          widgetTitle={"Publication Date"}>
          <Tag>23 May 2019</Tag>
        </Widget>

        <Widget
          colTitle={"col-md-3"}
          colSection={"col-md-9"}
          widgetTitle={"Author"}>
          <Tag>Mmusi Maimane</Tag>
        </Widget>

        <Widget
          colTitle={"col-md-3"}
          colSection={"col-md-9"}
          widgetTitle={"Category"}>
          <Tag>News</Tag><Tag>Speeches</Tag>
        </Widget>

        <Widget
          colTitle={"col-md-3"}
          colSection={"col-md-9"}
          widgetTitle={"Tags"}>
          <Tag>Education</Tag><Tag>ANC</Tag><Tag>Corruption</Tag>
        </Widget>
      </section>

      <section className={css(styles.articleShare)}>
        <Border mt={"large"} mb={"large"}/>
        <Widget
          widgetTitle={"Direct Link"}
          widgetTitleColor={"blue"}
          colTitle={"col-md-12"}
          colSection={"col-md-12"}>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" id="link" placeholder="https://da.org.za/news/corruption/article-name" readonly></input>
            </div>
          </form>
        </Widget>

        <Border mt={"small"} mb={"small"} borderColor={"none"} color={"whiteO"}/>

        <Widget
          widgetTitle={"Share"}
          widgetTitleColor={"blue"}
          colTitle={"col-md-12"}
          colSection={"col-md-12"}>
          <div className="row">
            <div className="col-md-6">
              <NavIcon iconName="facebook" iconColor={colors.socialFacebook}>{"Share on Facebook"}</NavIcon>
              <NavIcon iconName="twitter" iconColor={colors.socialTwitter}>{"Share on Twitter"}</NavIcon>
              <NavIcon iconName="envelope" iconColor={colors.socialEmail}>{"Send by Email"}</NavIcon>
              <NavIcon iconName="whatsapp" iconColor={colors.socialWhatsApp}>{"Share with What's App"}</NavIcon>
            </div>

            <div className="col-md-6">
              <NavIcon iconName="print" iconColor={colors.brandBlue}>{"Print"}</NavIcon>
              <NavIcon iconName="bookmark" iconColor={colors.brandBlue}>{"Bookmark"}</NavIcon>
              <NavIcon iconName="download" iconColor={colors.brandBlue}>{"Download"}</NavIcon>
              <NavIcon iconName="newspaper" iconColor={colors.brandBlue}>{"Journalist sign up"}</NavIcon>
            </div>
          </div>
        </Widget>
      </section>

    </footer>
  )
}

export default ArticleFooter;

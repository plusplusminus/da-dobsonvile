import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Tag, Widget } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';

const ArticleDetails = (props) => {

  const styles = StyleSheet.create({
    articleDetails:{
      display: 'block',
      marginBottom: spacing.space2,
      paddingBottom: spacing.space2,
      paddingTop: spacing.space4,
      borderBottom: '1px solid',
      borderColor: colors.borderBase,
    },
  });

  return (
    <footer className={css(styles.articleDetails)}>
      <Widget
        colTitle={"col-md-2"}
        colSection={"col-md-10"}
        widgetTitle={"Publication Date"}>
        <Tag>23 May 2019</Tag>
      </Widget>
      <Widget
        colTitle={"col-md-2"}
        colSection={"col-md-10"}
        widgetTitle={"Author"}>
        <Tag>Mmusi Maimane</Tag>
      </Widget>
      <Widget
        colTitle={"col-md-2"}
        colSection={"col-md-10"}
        widgetTitle={"Category"}>
        <Tag>News</Tag><Tag>Speeches</Tag>
      </Widget>
      <Widget
        colTitle={"col-md-2"}
        colSection={"col-md-10"}
        widgetTitle={"Tags"}>
        <Tag>Education</Tag><Tag>ANC</Tag><Tag>Corruption</Tag>
      </Widget>
    </footer>
  )
}

export default ArticleDetails;

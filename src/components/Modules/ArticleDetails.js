import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Label, Widget } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';

const ArticleDetails = (props) => {

  const styles = StyleSheet.create({
    articleDetails:{
      display: 'block',
      marginBottom: spacing.Space2,
      paddingBottom: spacing.Space2,
      paddingTop: spacing.Space4,
      borderBottom: '1px solid',
      borderColor: colors.Border,
    },
  });

  return (
    <footer className={css(styles.articleDetails)}>
      <Widget
        colTitle={"col-md-2"}
        colSection={"col-md-10"}
        widgetTitle={"Publication Date"}>
        <Label>23 May 2019</Label>
      </Widget>
      <Widget
        colTitle={"col-md-2"}
        colSection={"col-md-10"}
        widgetTitle={"Author"}>
        <Label>Mmusi Maimane</Label>
      </Widget>
      <Widget
        colTitle={"col-md-2"}
        colSection={"col-md-10"}
        widgetTitle={"Category"}>
        <Label>News</Label><Label>Speeches</Label>
      </Widget>
      <Widget
        colTitle={"col-md-2"}
        colSection={"col-md-10"}
        widgetTitle={"Tags"}>
        <Label>Education</Label><Label>ANC</Label><Label>Corruption</Label>
      </Widget>
    </footer>
  )
}

export default ArticleDetails;

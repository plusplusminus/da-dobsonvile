import React from "react";
import { colors, spacing } from 'common/styles/variables';
import { StyleSheet, css } from 'aphrodite';

function Spacing() {

  const styles = StyleSheet.create({
    storySpacing:{
      position: 'relative',
      display: 'inline-block',
      minWidth: 250,
      marginBottom: 20,
      marginTop: '-1px',
      marginLeft: '-1px',
      borderLeft: '1px solid',
      borderBottom: '1px solid',
      borderColor: colors.borderBase,
      backgroundColor: colors.bgLight,
      textAlign: 'center',
    },
  });

  const spacingArray = [];

  Object.keys(spacing).forEach((name) => {
    if (spacing[name]) {
      spacingArray.push(
        <div className={css(styles.storySpacing)} style={{height: spacing[name]}}>
          <code>spacing.{ name }</code>
          <p>{ spacing[name] }</p>
        </div>
      );
    }
  });

  return (
    <div>
      {spacingArray.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  );
}

export default Spacing;

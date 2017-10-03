import React from "react";
import { colors, spacing } from 'common/styles/variables';
import { StyleSheet, css } from 'aphrodite';

function Spacing() {

  const styles = StyleSheet.create({
    storySpacing:{
      position: 'relative',
      display: 'inline-block',
      minWidth: 150,
      marginBottom: 20,
      marginTop: '-1px',
      marginLeft: '-1px',
      border: '1px solid',
      borderBottom: '1px solid',
      borderColor: colors.Border,
      backgroundColor: colors.bgLight,
      textAlign: 'center',
    },
  });

  const spacingArray = [];

  Object.keys(spacing).forEach((name) => {
    if (spacing[name]) {
      spacingArray.push(
        <div className={css(styles.storySpacing)} style={{height: spacing[name]}}>
          <pre>{ name }: <em>{ spacing[name] }</em></pre>
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

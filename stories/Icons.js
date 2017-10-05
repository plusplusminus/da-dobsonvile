import React from "react";
import { icons, spacing } from 'common/styles/variables';
import { StyleSheet, css } from 'aphrodite';
import { Icon } from 'components';

function Icons() {

  const styles = StyleSheet.create({
    storyIcon:{
      display: 'block',
      padding: spacing.space1,
      textAlign: 'center',
    },
    label:{
      display: 'block',
    }
  });

  const iconsArray = [];

  Object.keys(icons).forEach((name) => {
    if (icons[name]) {
      iconsArray.push(
        <div className={css(styles.storyIcon)}>
          <Icon name={icons[name]} />
          <div className={css(styles.label)}>
            <code>icons.{name}</code>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="row">
      {iconsArray.map((el, i) => (
        <div className="col-md-2" key={i}>{el}</div>
      ))}
    </div>
  );
}

export default Icons;

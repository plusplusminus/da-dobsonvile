import React from "react";
import { icons, spacing } from 'common/styles/variables';
import { StyleSheet, css } from 'aphrodite';

function Icons() {

  const styles = StyleSheet.create({
    storyIcon:{
      display: 'block',
      padding: spacing.Space1,
      textAlign: 'center',
    },
    icon:{
      fontSize: '200%',
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
            <i className={`icon icon-${icons[name]} ${css(styles.icon)}`}></i>
            <div className={css(styles.label)}>
              <pre>{name}</pre>
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

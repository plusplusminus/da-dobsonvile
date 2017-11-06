import React from 'react'
import { colors } from "../../common/styles/variables";
import { Heading } from "components";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  label: {
    display: 'inline-block',
  },
});

const Label = props => (
  <span className={css(styles.label)}>
    <Heading
      size={"tiny"}
      color={"blue"}
      weight={"regular"}
      mb={"tiny"}
      tracking={"none"}
    >
    { props.children }
    </Heading>
  </span>
);

export default Label;

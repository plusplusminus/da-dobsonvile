import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { HeadingLines, Heading } from 'components';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';

const sectionFull = (props) => {
  const { title, children, bgUrl, center, color } = props;
  const styles = StyleSheet.create({
    sectionFull:{
      marginBottom: props.mb,
      marginTop: props.mt,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      textAlign: center == true ? 'center' : 'left',
    },
    bg:{
      paddingTop: props.pt,
      paddingBottom: props.pb,
      backgroundColor: props.bgColor,

    },
  });

  return (
    <section className={css(styles.sectionFull)} style={{backgroundImage:`url(${bgUrl})`}}>
      <div className={css(styles.bg)}>
        <div className="container">
          { title && !center &&
            <HeadingLines lineLeft color={color} mb={"huge"} >
              <Heading color={color} size={"tiny"} tracking={"huge"} weight={"light"} uppercase>{title}</Heading>
            </HeadingLines>
          }
          { title && center &&
            <Heading color={color} mb={"small"} center>{title}</Heading>
          }
          <div className="row">
            { children }
          </div>
        </div>
      </div>
    </section>
  )
}

sectionFull.defaultProps = {
  bgColor: null,
  color: 'base',
  center: false,
  title: null,
  pt: spacing.space13,
  pb: spacing.space13,
  mb: spacing.space13,
  mt: spacing.space13,
  bgUrl: null,
}

sectionFull.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  center: PropTypes.bool,
  title: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  mb: PropTypes.string,
  mt: PropTypes.string,
  bgUrl: PropTypes.string,
}

export default sectionFull;

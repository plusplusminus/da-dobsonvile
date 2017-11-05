import React from 'react';
import PropTypes from 'prop-types';
import { dobsonville } from 'common/images';
import { StyleSheet, css } from 'aphrodite';
import { spacing } from "common/styles/variables";

const styles = {
  image: {
    margin: 0,
    padding: 0,
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    flex:'none',
  },
  fixed: {
    display: 'inline-block',
  },
  rounded: {
    borderRadius: spacing.space05,
  }
};

const Image = (props) => {

  const { imageUrl, alt, fixed, rounded } = props;

  const baseStyles = StyleSheet.create({
    image:{
      ...styles.image,
      ...(fixed && styles.fixed),
      ...(rounded && styles.rounded),
    }
  });

  return (
    <img src={imageUrl} alt={alt} className={css(baseStyles.image)}/>
  );
}

Image.defaultProps = {
  imageUrl: dobsonville,
  alt: 'alt text missing',
  fixed: false,
  rounded: false,
}

Image.propTypes = {
  /** Alt text for the image */
  alt: PropTypes.string.isRequired,
  /** Image src */
  imageUrl: PropTypes.string.isRequired,
  /** Is this image not fluid */
  fixed: PropTypes.bool.isRequired,
  /** Does the image have rounded corners */
  rounded: PropTypes.bool.isRequired,
};

Image.styles = styles;

export default Image;

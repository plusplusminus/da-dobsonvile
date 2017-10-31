import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fonts, fontStyles, fontWeight, colors, spacing, letterSpacing, opacity } from 'common/styles/variables';
import { dobsonville } from 'common/images';
import { Heading, Icon, Copy } from 'components';
import {rgba} from '../../utils/helpers'

const styles = {
  sticker:{
    base:{
      borderRadius: spacing.space05,
      marginBottom: spacing.space2,
      overflow: 'hidden',
      display: 'inline-block',
      height: '100%',
    },
    imageUrl:{
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
  },
  header:{
    display: 'flex',
    alignItems: 'center',
  },
  wrapper:{
    base:{
      padding: spacing.space4,
      paddingTop: spacing.space3,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      border: '1px solid',
      height: '100%',
    },
  },
  color: {
    white: {
      backgroundColor: rgba(colors.brandWhite, 0.9),
      borderColor: colors.borderLight,
    },
    blue: {
      backgroundColor: rgba(colors.brandBlue, 0.9),
      borderColor: colors.brandBlue,
    },
    green: {
      backgroundColor: rgba(colors.brandGreen, 0.9),
      borderColor: colors.brandGreen,
    },
    red: {
      backgroundColor: rgba(colors.brandRed, 0.9),
      borderColor: colors.brandRed,
    },
    yellow: {
      backgroundColor: rgba(colors.brandYellow, 0.9),
      borderColor: colors.brandYellow,
    },
  },
};

  const Sticker = ({ color, imageUrl, title, content, icon}) => {

  const baseStyles = StyleSheet.create({
    sticker: {
      ...styles.sticker.base,
      ...(color && styles.color[color]),
      ...(imageUrl && styles.sticker.imageUrl),
      backgroundImage: `url(${imageUrl})`,
    },
    header:{
      ...styles.header,
    },
    wrapper:{
      ...styles.wrapper.base,

      ...(color && styles.color[color]),
      ...(imageUrl && styles.wrapper.imageUrl),
    },
  });

  return (
    <div className={css(baseStyles.sticker)}>
      <div className={css(baseStyles.wrapper)}>
        <div className={css(baseStyles.header)}>
          { icon &&
            <Icon
              ml={spacing.space0}
              mr={spacing.space2}
              color={ color === "white" ? colors.brandBlue : colors.brandWhite }
              fs={"49px"}
              name={icon}
            />
          }
          { title &&
            <Heading
              size={"huge"}
              weight={"regular"}
              color={ color === "white" ? "blue" : "white" }
              mb={"tiny"}
            >
              {title}
            </Heading>
          }
        </div>

        { content &&
          <Copy
            color={ color === "white" ? "blue" : "white" }
            weight={ title || icon ? "light" : "regular" }
            size={ title || icon ? "medium" : "huge"}
            mb={"none"}
          >
            { content }
          </Copy>
        }
      </div>
    </div>
  )
}

Sticker.defaultProps = {
  imageUrl: null,
  title: null,
  icon: null,
  color: "white",
  content: null,
}

Sticker.propTypes = {
  /** Content of Component */
  content: PropTypes.string.isRequired,
  /** Icon for the Title */
  icon: PropTypes.string,
  /** ImageUrl for background effect */
  imageUrl: PropTypes.string,
  /** Title of Sticker Component */
  title: PropTypes.string,
  /** Background Color Sticker Component */
  color: PropTypes.oneOf([
    "white",
    "blue",
    "red",
    "green",
    "yello",
  ]),
}

export default Sticker;

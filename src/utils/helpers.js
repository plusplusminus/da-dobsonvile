import { spacing, colors } from 'common/styles/variables';
import color from "color";

/** Hover Attributes */
export const getHoverAttributes = (args, colors) => {
  if (!args) return null;

  const styles = Object.keys(args).reduce((result,item) => {
    result[item] = colors[args[item]];
    return result;
  },{})

  return {
    ':hover': {
      outline: 0,
      ...styles,
    },
    ':focus': {
      outline: 0,
      ...styles,
    },
    ':active': {
      outline: 0,
      ...styles,
    },
  }
}


/** Convert Hex to RGBA */
export const rgba = (hex, opacity) => {
  return color(hex).alpha(opacity).rgbString();
}

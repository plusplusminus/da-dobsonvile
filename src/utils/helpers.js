import { spacing, colors } from 'common/styles/variables';


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

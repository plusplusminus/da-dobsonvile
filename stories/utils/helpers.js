export const getStyleValue = (variable) => {

  if (!variable) return null;
  const variableArray = [];

  return Object.keys(variable).map((name) => (variable[name]))

}

export const filterStyleGroup = (arr, prefix) => {
  console.log(arr);
  return Object.keys(arr)
    .filter(name => name.includes(prefix))
    .map(name => arr[name])
}

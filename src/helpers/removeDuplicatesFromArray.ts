const removeDuplicatesFromArray = (values: any[]): any[] => {
  return [...new Set(values)];
}

export default removeDuplicatesFromArray;

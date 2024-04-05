const slugifyString = (str: string): string => {
  let newString: string = str.toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '');

  // Remove accents
  newString = newString.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Remove special characters
  newString = newString.replace(/[^a-zA-Z0-9]/g, '');

  // Remove double underscores
  newString = newString.replace(/__+/g, '_');

  // Remove double hyphens
  newString = newString.replace(/--+/g, '-');

  // Remove underscores at the beginning and end
  newString = newString.replace(/^_+|_+$/g, '');

  // Remove numbers at the beginning
  newString = newString.replace(/^\d+/, '');
  return newString;
}

export default slugifyString;

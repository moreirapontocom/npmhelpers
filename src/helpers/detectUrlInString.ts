const detectUrlInString = (text: string): string => {
  return text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
}

export default detectUrlInString;

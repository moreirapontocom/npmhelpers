const convertUrlToLink = (text: string, target: string = "_blank") => {
  return text.replace(/(https?:\/\/[^\s]+)/g, `<a href="$1" target="${target}">$1</a>`);
}

export default convertUrlToLink;

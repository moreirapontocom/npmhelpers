const truncateString = (str: string, length: number = 10, showDots: boolean = true, direction: string = "ltr") => {
  // truncate str to length characters
  // if showDots is true, add "..." to the end
  // if showDots is false, return the truncated string without "..."
  // if direction is "rtl", truncate from the right side
  // if direction is "ltr", truncate from the left side
  // if direction is "center", truncate from both sides

  if (str.length <= length) {
    return str;
  }

  if (direction === "rtl") {
    return showDots ? `...${str.slice(str.length - length)}` : str.slice(str.length - length);
  }

  if (direction === "center") {
    const mid = Math.floor(length / 2);
    return showDots ? `${str.slice(0, mid)}...${str.slice(str.length - mid)}` : str.slice(0, mid) + str.slice(str.length - mid);
  }

  return showDots ? `${str.slice(0, length)}...` : str.slice(0, length);
}

export default truncateString;

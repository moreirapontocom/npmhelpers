const randomString = (length: number = 10) => {
  const dictionary: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let random: string = "";
  for (let i = 0; i < length; i++) {
    random += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
  }
  return random;
}

export default randomString;

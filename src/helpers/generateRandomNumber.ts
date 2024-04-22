const generateRandomNumber = (min = 1, max = 99999): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export default generateRandomNumber;
const onlyNumbers = (text: string | null): string => {
  if (!text || text === "") {
    return "";
  }

  return text.replace(/\D/g, "");
};

export default onlyNumbers;

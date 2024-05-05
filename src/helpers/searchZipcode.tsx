const searchZipcode = async (zipcode: string) => {
  const response = await fetch(`https://viacep.com.br/ws/${zipcode.trim()}/json/`);
  return await response.json();
};

export default searchZipcode;
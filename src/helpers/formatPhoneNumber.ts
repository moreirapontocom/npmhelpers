const formatPhoneNumber = (phone: string) => {
  if (!phone) return phone;
  const cleaned = phone.replace(/\D/g, "");
  // Suporta: 99 (99) 9999-9999 ou 99 (99) 99999-9999
  const match = cleaned.match(/^(\d{1,2})(\d{2})(\d{4,5})(\d{4})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  return cleaned;
};

export default formatPhoneNumber; 
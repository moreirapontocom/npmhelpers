const formatPhoneNumber = (phone: string) => {
  if (!phone) return phone;
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{1,3})(\d{2,3})(9?\d{4})(\d{4})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  return cleaned;
};

export default formatPhoneNumber;
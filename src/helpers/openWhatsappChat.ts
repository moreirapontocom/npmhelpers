const openWhatsappChat = (phone: string): void => {
  phone = phone.replace(/\D/g, '');
  window.open(`https://api.whatsapp.com/send?phone=${phone}`, '_blank');
}

export default openWhatsappChat;

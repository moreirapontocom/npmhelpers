const shareToWhatsapp = (message: string, number: string | null): void => {
  message = encodeURIComponent(message);
  let url = `https://api.whatsapp.com/send?text=${message}`;
  if (number) {
    number = number.replace(/\D/g, '');
    url += `&phone=${number}`;
  }
  window.open(url, '_blank');
}

export default shareToWhatsapp;

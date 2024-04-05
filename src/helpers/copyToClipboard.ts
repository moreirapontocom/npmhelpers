const copyToClipboard = (item: string): boolean => {
  try {
    const create_copy = (e: any): any => {
      e.clipboardData.setData('text/plain', item);
      e.preventDefault();
    }
    document.addEventListener('copy', create_copy);
    document.execCommand('copy');
    document.removeEventListener('copy', create_copy);
    return true;
  } catch (_: any) {
    return false;
  }
}

export default copyToClipboard;

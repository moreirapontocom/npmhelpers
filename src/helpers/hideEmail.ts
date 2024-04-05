const hideEmail = (email: string): string => {
  const [name, domain] = email.split("@");
  return `${name.substring(0, 2)}...@${domain}`;
}

export default hideEmail;

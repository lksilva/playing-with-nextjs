export function HasCapitalLetter(string) {
  const regex = new RegExp(/[A-Z]/);
  return regex.test(string);
}

export function HasNumber(string) {
  const regex = new RegExp(/[0-9]/);
  return regex.test(string);
}
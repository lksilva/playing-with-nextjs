export function HasCapitalLetter(string) {
  const regex = new RegExp(/[A-Z]/);
  return regex.test(string);
}

export function HasNumber(string) {
  const regex = new RegExp(/[0-9]/);
  return regex.test(string);
}

export function ArrayPush(arr, newEntry) {
  return [].concat(arr, newEntry)
}

export function AllPropertiesFilled(object) {
  return !Object.values(object).some( item => item.trim() === '' || item === null || item === undefined )
}

export function ObjectIsIdentic(object1, object2) {
  return JSON.stringify(object1)===JSON.stringify(object2)
}
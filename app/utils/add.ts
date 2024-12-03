import "server-only";

export const add = (numbers: string): number => {
  // checking for empty string
  if (numbers.trim().length === 0) {
    return 0;
  }
  let numberArr = [];
  if (numbers.startsWith("//")) {
    const endIndex = numbers.indexOf("\n");
    const delimiter = numbers.substring(2, endIndex);
    numberArr = numbers.substring(endIndex + 1).split(delimiter);
  } else {
    numberArr = numbers.split(/,|\n/);
  }
  const sum = numberArr.reduce((prevValue, currentValue) => {
    return prevValue + parseInt(currentValue);
  }, 0);
  return sum;
};

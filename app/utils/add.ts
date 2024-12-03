import "server-only";

export const add = (numbers: string): number => {
  // checking for empty string
  if (numbers.trim().length === 0) {
    return 0;
  }
  const numberArr = numbers.split(",");
  const sum = numberArr.reduce((prevValue, currentValue) => {
    return prevValue + parseInt(currentValue);
  }, 0);
  return sum;
};

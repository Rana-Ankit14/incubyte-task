import "server-only";

export const add = (numbers: string): number => {
  const numberArr = numbers.split(",");
  const sum = numberArr.reduce((prevValue, currentValue) => {
    return prevValue + parseInt(currentValue);
  }, 0);
  return sum;
};

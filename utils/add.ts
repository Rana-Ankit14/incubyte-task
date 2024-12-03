export const add = (numbers: string): number => {
  // checking for empty string
  if (numbers.trim().length === 0) {
    return 0;
  }
  let numberArr = [];
  let negativeNumbers: Array<string> = [];
  if (numbers.startsWith("//")) {
    const endIndex = numbers.indexOf("\n");
    const delimiter = numbers.substring(2, endIndex);
    numberArr = numbers.substring(endIndex + 1).split(delimiter);
  } else {
    numberArr = numbers.split(/,|\n/);
  }
  const sum = numberArr.reduce((prevValue, currentValue) => {
    if (parseInt(currentValue) < 0) {
      negativeNumbers.push(currentValue);
      return 0;
    }

    return prevValue + parseInt(currentValue);
  }, 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }
  return sum;
};

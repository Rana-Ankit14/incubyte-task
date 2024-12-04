const escapeRegex = (str: string) =>
  str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

export const add = (numbers: string): number => {
  // checking for empty string
  if (numbers.trim().length === 0) {
    return 0;
  }
  let numberArr: Array<string> = [];
  let negativeNumbers: Array<string> = [];

  if (numbers.startsWith("//")) {
    const endIndex = numbers.indexOf("\n");
    const delimiter = numbers.substring(2, endIndex);
    const escapedDelimiter = escapeRegex(delimiter);
    const regex = new RegExp(`${escapedDelimiter}|\\n`);

    numberArr = numbers.substring(endIndex + 1).split(regex);
  } else {
    const regex = new RegExp(`,|\\n`);
    numberArr = numbers.split(regex);
  }
  const sum = numberArr.reduce((prevValue, currentValue) => {
    if (parseInt(currentValue) < 0) {
      negativeNumbers.push(currentValue);
      return 0;
    }

    return prevValue + parseInt(currentValue.trim() || "0");
  }, 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  return sum;
};

export const generateRandomNumber = (length: number): number => {
  const rNum = Math.floor(Math.random() * Math.pow(10, length));
  if (rNum < Math.pow(10, length - 1)) {
    return generateRandomNumber(length);
  } else {
    return rNum;
  }
};

const operations = ["add", "subtract"];

export const randomOperation = () => {
  const l = getRandomInt(0, operations.length);
  return operations[l];
};

// a function generate random number less than max number
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

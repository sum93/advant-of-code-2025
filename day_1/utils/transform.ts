export const transformToColumns = (input: string): Array<Array<number>> => {
  const numbers = input.split(/\s+/).map(Number);

  const left = [];
  const right = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }

  return [left, right];
};

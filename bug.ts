function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Type 'number' is not assignable to type 'string'.
    console.log(i.toString());
  }
}

printNumbers2(5);
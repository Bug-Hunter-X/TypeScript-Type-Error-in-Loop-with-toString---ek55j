function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i.toString());
  }
}

printNumbers(5);

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(String(i));
  }
}

printNumbers2(5); //Alternative Solution
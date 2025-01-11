# TypeScript Type Error in Loop

This repository demonstrates a common TypeScript type error encountered when using the `toString()` method within a loop designed to print numbers.  The error arises because TypeScript infers the type of `i` within the loop as `number`, while `console.log` expects a string argument. 

The `bug.ts` file showcases the error. The `bugSolution.ts` file provides a corrected version.

## How to reproduce

1. Clone this repository.
2. Open `bug.ts` and observe the error.
3. Open `bugSolution.ts` to view the fix. 
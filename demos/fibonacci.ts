function generateFibonacci(n: number): number[] {
    const fibonacciSequence: number[] = [];
  
    if (n >= 1) {
      fibonacciSequence.push(0);
    }
    if (n >= 2) {
      fibonacciSequence.push(1);
    }
  
    for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextFibonacci);
    }
  
    return fibonacciSequence;
  }
  
  // Example usage:
  const n = 10; // Change this to the desired number of Fibonacci numbers
  const fibonacciNumbers = generateFibonacci(n);
  console.log(fibonacciNumbers);
  
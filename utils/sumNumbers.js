/* -------------------------------------------------------------------------- */
/*                                 Exercise 2                                 */
/* -------------------------------------------------------------------------- */

const sumNumbers= (n)=>{  // 1 Space Of Memory
  // Sum numbers from cero to N 
  let sum= 0;  // O(1) // 1 Space Of Memory
  for (let index = 0; index <= n; index++) { // 1 Space Of Memory for index
     sum = sum+index; // O(2)* O(N)  
  }
  return sum;  // O(1)
}

console.log(sumNumbers(5));

/* -------------------------------------------------------------------------- */
/*                               Time Complexity                              */
/* -------------------------------------------------------------------------- */

// 1+2N+1 = 2N+2
//  O(N)

/* -------------------------------------------------------------------------- */
/*                              Space Complexity                              */
/* -------------------------------------------------------------------------- */

// 1+1+1 = 3
//O(1) 
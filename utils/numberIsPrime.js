
/* -------------------------------------------------------------------------- */
/*                                 Exercise 1                                 */
/* -------------------------------------------------------------------------- */

// Given an positive integer this function return true if the number is prime, or false if is not a prime number. 

const numberIsPrime = (n)=>{
  if(n <=0){                    //  Step O(1)
    throw new Error("N is not a integer positive") //  O(1)
  }
  let divisibilityCounter = 0;  //  O(1)

  for (let divisor = 1; divisor <= n; divisor++){  //  1 + 1 * N => 2N
    if(divisibilityCounter>2){  // O(1)
      return; // O(1)
    }
    if(n%divisor === 0){  // O(1)
      divisibilityCounter=divisibilityCounter+1; // O(1)
    }
  }
  if(divisibilityCounter !== 2){ // O(1)
    return false; // O(1)
  }
  return true;// O(1)
}


/* -------------------------------------------------------------------------- */
/*                               Time Complexity                              */
/* -------------------------------------------------------------------------- */

// 1 + 1 + 1 + 4N + 1 + 1 + 5  =  4N+7
// O(N) 

/* -------------------------------------------------------------------------- */
/*                              Space Complexity                              */
/* -------------------------------------------------------------------------- */

// 1+1+1+N = 3N
// O(N) 

/* -------------------------------------------------------------------------- */
/*                                 Exercise 7                                 */
/* -------------------------------------------------------------------------- */

const calcMcm= (m, n)=>{
  let temp=0;  // O(1)
  let productMN = m *n ; // O(1)
  while(n!==0){
    temp = n;  // O(1)
    n = m % n ;  // O(1)
    m = temp; // O(1)
  }  
  // When the cycle finished m = MCD 
  // MCM (a,b) * MCD (a,b) = a * b
  return  (productMN) / m; // MCM   // O(1)
  
}

calcMcm(8316, 2520);

/* -------------------------------------------------------------------------- */
/*                               Time Complexity                              */
/* -------------------------------------------------------------------------- */

// 1 + 1 + 3N 
// O() ?

/* -------------------------------------------------------------------------- */
/*                              Space Complexity                              */
/* -------------------------------------------------------------------------- */
// 1+1+1+1
// O(1) 
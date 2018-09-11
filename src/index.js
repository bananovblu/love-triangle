/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let length = preferences.length; 
  let count = 0;  
  for (let i = 0; i<length; i++) { 
    let lover = preferences[preferences[i]];
    console.log(lover + '___' + preferences[i]) 
    if (lover === i+1) {      
      count++; 
      }
     }
     if (count%2) { 
       return 0; 
      }
       return count/2; 
};

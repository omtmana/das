// Merge Sort

// Merge Code
const merge = (arr1, arr1) => {
   let results = []
   let i = 0
   let j = 0

   while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
         results.push(arr1[i])
         i++
      } else {
         results.push(arr2[j])
         j++
      }
   }

   while (i < arr1.length) {
      results.push(arr1[i])
      i++
   }

   while (j < arr2.length) {
      results.push(arr2[j])
      j++
   }
   return results
} 
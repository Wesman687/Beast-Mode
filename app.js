/** Flatten Array **
 * 
 * Given an array 'nums' that can have nested arrays inside it,
 * flatten the array. 
 *  
 * 
 * @example
 * flatten([1, 2, 3, [4, 5]]) -> [1, 2, 3, 4, 5]
 * flatten([1, 2, 3, [4, [5]]]) -> [1, 2, 3, 4, 5]
 * flatten([1, [2, 3, [4, [5]]]]) -> [1, 2, 3, 4, 5]
 * 
 */
const results = []
function flatten(nums) {
    for (elem of nums) {
        if(Array.isArray(elem)){
            flatten(elem)
        }else{
            results.push(elem)
        } 
        
    }
  return results
}


console.log(flatten([1, [2, 3, [4, [5]]]]));

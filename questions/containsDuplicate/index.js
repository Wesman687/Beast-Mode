/** Contains Duplicate **
 * 
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 * 
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 * 
 */
let i
const containsDuplicate = (nums) => {
           
    const set = new Set() 

    for (let i = 0; i < nums.length; ++i){
        if (set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }


    /* 0(nlog(n)) time | 0(n) space
    const sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < sorted.length -1; i++){
        if (sorted[i] === sorted[i + 1]){
            console.log(sorted[i])
        }
    }
    /*
    O(n^2) time | O(1) space
    for (let i = 0; i < nums.length -1; i++){
        for(let j = i + 1; j < nums.length ; j++){
            if (nums[i] == nums[j]){
                console.log(nums[i])
            }
        }
    }
    */ 
}

module.exports = containsDuplicate;

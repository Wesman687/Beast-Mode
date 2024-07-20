/** Binary Search **
 *
 * Given a sorted array 'nums' and an integer 'target', return
 * the index of the target.
 *
 * Note: Your solutions' time complexity must be faster than O(n).
 *
 * @example
 * binarySearch([1, 2, 4, 9, 12], 9) -> 3
 * binarySearch([-2, -1, 4, 5, 7], -1) -> 1
 * binarySearch([-1, 4, 18, 20], 18) -> 2
 *
 */
function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let i = 0;
  while (l<=r) {     
    mid = Math.floor((l + r) / 2); 
    if (nums[mid] === target){
        return mid
    }
    else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return"No matches";
}

console.log(binarySearch([1, 2, 4, 9, 12], 8));

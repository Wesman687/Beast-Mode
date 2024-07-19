/** Maximum Subarray
 *
 * Given an integer array `nums`, find the subarray which has the
 * largest sum and return the sum.
 *
 * @examples
 * maxSubArray([5, 4, -1, 7, 8]) = 23
 * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
 * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
 */

const maxSubArray = (nums) => {
  /* Most optimal O(n)  | O(1) space
    let maxSum = nums[0]
    let sum = 0
    for (let i = 0; i < nums.length; ++i){
        if (sum < 0){
            sum = 0
        }
        sum += nums[i]
        maxSum = Math.max(maxSum, sum)
    }
    console.log(maxSum)


    /*  O(n^2)
    let maxSum = nums[0]

    for (let i = 0; i < nums.length - 1; ++i){
        let sum = nums[0]
        for(let j = i + 1; j < nums.length; ++j){
            sum += nums[j]
            maxSum = Math.max(maxSum, sum)
        }
    }
    console.log(maxSum)


    /*  O(n^3)
    let max = nums[0]
    let indexs = []
    for (let i = 0; i < nums.length; ++i){
        for (let j = i + 1; j <= nums.length; ++j){
            const subArray = nums.slice(i, j)
            let sum = 0
            subArray.forEach( num => sum += num)
            if (sum > max){                         could do sum = Math.max(maxSum, sum)  if you dont need to return the subArray
                max = sum
                indexs = subArray
            }
        }
    }
    console.log(indexs, max)
    */
};

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;

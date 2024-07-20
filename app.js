/** Meeting Times **
 * 
 * Given an array of meeting times, determine if a person can
 * attend all meetings. 
 *  
 * @example
 * meetingTimes([[10, 15], [20, 25]]) -> true
 * meetingTimes([[5, 10], [10, 15], [12, 25], [25, 30]]) -> false
 * meetingTimes([[10, 20], [20, 30], [30, 40]]) -> true
 * 
 */

function meetingTimes(nums) {
  nums.sort((a,b) => a[0] - b[0]) 
    for (let i = 1; i < nums.length - 1; ++i){
        if (nums[i - 1][1] > nums[i][0]){
            return false
        }
        
    }
    return true

}

console.log(meetingTimes([[5, 10], [10, 15], [16, 25], [25, 30]]));

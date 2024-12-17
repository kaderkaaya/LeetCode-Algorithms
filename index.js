/**
 *  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
     You must write an algorithm with O(log n) runtime complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    let low =0;
    let high = nums.length;
    while(high>low){
   let mid = low + Math.floor((high - low) / 2);
    if(target>nums[mid]){
        low = mid+1;
    }
    else{
        high = mid;
    }
    }
    return low;
};
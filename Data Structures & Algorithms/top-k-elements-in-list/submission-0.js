// Given an integer array nums and an integer k, return the k most frequent elements within the array.

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let freq = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (!freq.has(nums[i])) {
        freq.set(nums[i], 1);
      } else {
        let val = freq.get(nums[i]);
        freq.set(nums[i], val + 1);
      }
    }

    const sortedArr = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]);
    // console.log(sortedArr);

    return sortedArr.slice(0, k).map((pair) => pair[0]);
  }
}

const s1 = new Solution();

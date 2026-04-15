class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        let pair = [];

        while(left < right){
            if (numbers[left] + numbers[right] === target){
                pair.push(left + 1);
                pair.push(right + 1);
                return pair;
            } else if(numbers[left] + numbers[right] > target) {
                right--;
            } else {
                left++
            }
        }
    }
}

const s = new Solution()
console.log(s.twoSum([1,2,3,4], 3))

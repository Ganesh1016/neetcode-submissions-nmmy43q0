class Solution:
    def hasDuplicate(self, nums):
        checked = set()
        for i in range(len(nums)):
            if nums[i] in checked:
                return True
            else:
                checked.add(nums[i])
                
        return False

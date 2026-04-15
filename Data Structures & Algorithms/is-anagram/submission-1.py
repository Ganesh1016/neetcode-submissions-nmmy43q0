# Valid Anagram

class Solution:
    def isAnagram(self, s, t):
        count = {}
        
        if len(s) != len(t):
            return False
        
        for char in s:
            count[char] = count.get(char, 0) + 1
                
        print(count)
                
        for char in t:
            if char not in count:
                return False
            count[char] -= 1
            
            if count[char] < 0:
                return False
            
        print(count)
        
        return True    

        
s1 = Solution()
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNum = (c) => /[a-z0-9]/i.test(c);

        let left = 0;
        let right = s.length - 1;

        while (left < right){
            while (left < right && !isAlphaNum(s[left])) left++;
            while(left < right && !isAlphaNum(s[right])) right--;
            
            const a = s[left].toLowerCase();
            const b = s[right].toLowerCase()

            if(a != b) return false;

            left++;
            right--;
        }

        return true;
    }
}

const sol = new Solution()
console.log(sol.isPalindrome("tab a cat"))

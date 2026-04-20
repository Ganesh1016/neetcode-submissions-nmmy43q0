class Solution {
    groupAnagrams(strs) {
        let checked = new Map()
        
        for (let i = 0; i < strs.length; i++){
            const sortedWord = strs[i].split('').sort().join('')
            
            if(!checked.has(sortedWord)){
                checked.set(sortedWord, [])
            }
            
            checked.get(sortedWord).push(strs[i])
        }
        
        return Array.from(checked.values())
    }
}

const s1 = new Solution
console.log(s1.groupAnagrams(["act","pots","tops","cat","stop","hat"]))

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphaNum(char) {
            return (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
        }
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            while (!isAlphaNum(s[l].toLowerCase()) && l < r) l++;
            while (!isAlphaNum(s[r].toLowerCase()) && l < r) r--;
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }
        return true;
    }
}

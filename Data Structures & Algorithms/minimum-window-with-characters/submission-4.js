class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";
        const need = {};
        const window = {};
        let result = null;
        for (let i = 0; i < t.length; i++) {
            need[t[i]] = (need[t[i]] ?? 0) + 1;
            window[s[i]] = (window[s[i]] ?? 0) + 1;
        }
        let l = 0;
        let r = t.length;
        const isValid = (window) => {
            for (const key in need) {
                if ((window[key] ?? 0) < need[key]) return false;
            }
            return true;
        }
        while (r < s.length) {
            while (isValid(window)) {
                if (result === null || r - l < result.length) {
                    result = s.substring(l, r);
                }
                window[s[l]]--;
                l++;
            }
            window[s[r]] = (window[s[r]] ?? 0) + 1;
            r++;
        }
        while (isValid(window)) {
            if (result === null || r - l < result.length) {
                result = s.substring(l, r);
            }
            window[s[l]]--;
            l++;
        }
        return result ?? "";
    }
}

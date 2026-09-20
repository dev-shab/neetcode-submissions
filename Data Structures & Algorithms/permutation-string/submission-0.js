class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        const a = "a".charCodeAt(0);
        const window = new Array(26).fill(0);
        const need = new Array(26).fill(0);
        let matched = 0;
        for(let i = 0; i < s1.length; i++) {
            need[s1[i].charCodeAt(0) - a]++;
            window[s2[i].charCodeAt(0) - a]++;
        }
        for(let i = 0; i < window.length; i++) {
            if(window[i] === need[i]) matched++;
        }
        let l = 0;
        let r = s1.length;
        while(r < s2.length) {
            if(matched === 26) return true;

            const leftIndex = s2[l].charCodeAt(0) - a;
            if(window[leftIndex] === need[leftIndex]) matched--;
            window[leftIndex]--;
            if(window[leftIndex] === need[leftIndex]) matched++;
            l++;

            const rightIndex = s2[r].charCodeAt(0) - a;
            if(window[rightIndex] === need[rightIndex]) matched--;
            window[rightIndex]++;
            if(window[rightIndex] === need[rightIndex]) matched++;
            r++;
        }
        return matched === 26;
    }
}

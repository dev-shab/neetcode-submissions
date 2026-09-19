class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(const str of strs) {
            result = result + `${str.length}#${str}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const result = [];
        while(i < str.length) {
            let length = "";
            while(str[i] !== "#") {
                length += str[i];
                i++;
            }
            i++;
            let s = "";
            const end = i + Number(length);
            while(i < end) {
                s += str[i];
                i++;
            }
            result.push(s);
        }
        return result;
    }
}

import { longestCommonPrefix } from "../../leetcode/14.最长公共前缀.js";

describe("14.最长公共前缀", () => {
    test('["abcc","abcc","abcb"]', () => {
        expect(longestCommonPrefix(["abcc", "abcc", "abcb"])).toBe("abc");
    });

    test('["dog","racecar","car"]', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });

    test('["flower", "flow", "flight"]', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });
});

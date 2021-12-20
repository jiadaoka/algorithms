import { lengthOfLongestSubstring } from "../../leetcode/3.无重复字符的最长子串.js";

describe("3.无重复字符的最长子串", () => {
    test("biidygcc", () => {
        expect(lengthOfLongestSubstring("biidygcc")).toBe(5);
    });

    test("pwwkew", () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    });

    test("cdd", () => {
        expect(lengthOfLongestSubstring("cdd")).toBe(2);
    });

    test("默认算法", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    });
});

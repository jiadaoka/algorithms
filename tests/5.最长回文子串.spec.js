import { longestPalindrome } from "../leetcode/5.最长回文子串.js";

describe("5.最长回文子串", () => {
    test("ccc", () => {
        expect(longestPalindrome("ccc")).toBe("ccc");
    });

    test("aacabdkacaa", () => {
        expect(longestPalindrome("aacabdkacaa")).toBe("aca");
    });

    test("a", () => {
        expect(longestPalindrome("a")).toBe("a");
    });

    test("默认示例", () => {
        expect(longestPalindrome("babad")).toBe("bab");
    });
});

import { isPalindrome } from "../../leetcode/9.回文数.js";

describe("9.回文数", () => {
    test("1000021", () => {
        expect(isPalindrome(1000021)).toBe(false);
    });

    test("默认示例", () => {
        expect(isPalindrome(121)).toBe(true);
    });
});

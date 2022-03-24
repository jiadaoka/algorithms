import { isMatch } from "../../leetcode/44.通配符匹配.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(isMatch("aa", "a")).toBe(false);
    });

    test("用例2", () => {
        expect(isMatch("aa", "*")).toBe(true);
    });

    test("用例3", () => {
        expect(isMatch("cb", "?a")).toBe(false);
    });

    test("用例4", () => {
        expect(isMatch("adceb", "*a*b")).toBe(true);
    });

    test("用例5", () => {
        expect(isMatch("acdcb", "a*c?b")).toBe(false);
    });
});

describe("自定义", () => {
    test("用例1", () => {
        expect(isMatch("aa", "aa")).toBe(true);
    });

    test("用例2", () => {
        expect(isMatch("aa", "??")).toBe(true);
    });

    test("用例3", () => {
        expect(isMatch("aa", "?a")).toBe(true);
    });

    test("用例4", () => {
        expect(isMatch("aa", "a?")).toBe(true);
    });

    test("用例5", () => {
        expect(isMatch("aa", "?")).toBe(false);
    });

    test("用例6", () => {
        expect(isMatch("aa", "???")).toBe(false);
    });

    test("用例7", () => {
        expect(isMatch("", "*")).toBe(true);
    });

    test("用例8", () => {
        expect(isMatch("aa", "**")).toBe(true);
    });

    test("用例9", () => {
        expect(isMatch("aa", "a**")).toBe(true);
    });

    test("用例10", () => {
        expect(isMatch("aa", "***")).toBe(true);
    });

    test("用例11", () => {
        expect(isMatch("aaaaaaa", "*")).toBe(true);
    });
});

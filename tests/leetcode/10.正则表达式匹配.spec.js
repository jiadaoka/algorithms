import { isMatch } from "../../leetcode/10.正则表达式匹配.js";

describe("10.正则表达式匹配", () => {
    test("aasdfasdfasdfasdfas,aasdf.*asdf.*asdf.*asdf.*s", () => {
        expect(
            isMatch("aasdfasdfasdfasdfas", "aasdf.*asdf.*asdf.*asdf.*s")
        ).toBe(true);
    });

    test("aaa,ab*a*c*a", () => {
        expect(isMatch("aaa", "ab*a*c*a")).toBe(true);
    });

    test("aaa,a*a", () => {
        expect(isMatch("aaa", "a*a")).toBe(true);
    });

    test("mississippi,mis*is*p*.", () => {
        expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
    });

    test("aab,c*a*b", () => {
        expect(isMatch("aab", "c*a*b")).toBe(true);
    });

    test("ab,.*", () => {
        expect(isMatch("aa", ".*")).toBe(true);
    });

    test("aa,a*", () => {
        expect(isMatch("aa", "a*")).toBe(true);
    });

    test("aa,a", () => {
        expect(isMatch("aa", "a")).toBe(false);
    });
});

import { longestValidParentheses } from "../../leetcode/32.最长有效括号.js";

describe("32.最长有效括号", () => {
    test("(()())())(", () => {
        const r = longestValidParentheses("(()())())(");
        expect(r).toBe(8);
    });

    test(")(", () => {
        const r = longestValidParentheses(")(");
        expect(r).toBe(0);
    });

    test("(()", () => {
        const r = longestValidParentheses("(()");
        expect(r).toBe(2);
    });
});

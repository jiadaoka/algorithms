import { isValid } from "../../leetcode/20.有效的括号.js";

describe("20.有效的括号", () => {
    test("()", () => {
        expect(isValid("()")).toBe(true);
    });

    test("{[]}", () => {
        expect(isValid("{[]}")).toBe(true);
    });

    test("(]", () => {
        expect(isValid("(]")).toBe(false);
    });
});

import { myAtoi } from "../leetcode/8.字符串转换整数-atoi.js";

describe("8.字符串转换整数-atoi.spec", () => {
    test("默认示例", () => {
        expect(myAtoi("4193 with words")).toBe(4193);
    });

    test("默认示例", () => {
        expect(myAtoi("42")).toBe(42);
    });
});

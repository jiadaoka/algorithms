import { minDistance } from "../../leetcode/72.编辑距离.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(minDistance("horse", "ros")).toBe(3);
    });

    test("用例2", () => {
        expect(minDistance("intention", "execution")).toBe(5);
    });
});

describe("自定义", () => {});

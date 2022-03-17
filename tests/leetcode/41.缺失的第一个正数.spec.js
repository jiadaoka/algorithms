import { firstMissingPositive } from "../../leetcode/41.缺失的第一个正数.js";

describe("leetCode测试用例", () => {
    test("用例4", () => {
        expect(firstMissingPositive([1, 1])).toBe(2);
    });

    test("用例1", () => {
        expect(firstMissingPositive([1, 2, 0])).toBe(3);
    });

    test("用例2", () => {
        expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
    });

    test("用例3", () => {
        expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
    });
});

describe("自定义", () => {
    test("用例1", () => {
        expect(firstMissingPositive([2, 1, 6, 5, 8, 7, 4, 3])).toBe(9);
    });
});

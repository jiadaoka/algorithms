import { trap } from "../../leetcode/42.接雨水.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    });

    test("用例3", () => {
        expect(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6])).toBe(23);
    });

    test("用例2", () => {
        expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
    });
});

describe("自定义", () => {
    test("用例1", () => {
        expect(trap([3, 2, 1, 0, 1, 2, 3])).toBe(9);
    });

    test("用例2", () => {
        expect(trap([3, 2, 1, 0, 4])).toBe(6);
    });

    test("用例3", () => {
        expect(trap([4, 0, 1, 2, 3])).toBe(6);
    });

    test("用例4", () => {
        expect(trap([0, 1, 2, 3])).toBe(0);
    });

    test("用例5", () => {
        expect(trap([3, 2, 1, 0])).toBe(0);
    });

    test("用例6", () => {
        expect(trap([9, 0, 9])).toBe(9);
    });
});

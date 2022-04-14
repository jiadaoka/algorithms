import { maxSubArray } from "../../leetcode/53.最大子数组和.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });

    test("用例2", () => {
        expect(maxSubArray([1])).toBe(1);
    });

    test("用例3", () => {
        expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
    });

    test("用例4", () => {
        expect(maxSubArray([-2, 1])).toBe(1);
    });

    test("用例5", () => {
        expect(maxSubArray([-2, -1])).toBe(-1);
    });
});

describe("自定义", () => {});

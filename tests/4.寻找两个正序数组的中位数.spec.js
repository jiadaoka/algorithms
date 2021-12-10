import { findMedianSortedArrays } from "../leetcode/4.寻找两个正序数组的中位数.js";

describe("4.寻找两个正序数组的中位数", () => {
    test("默认示例", () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    });
});

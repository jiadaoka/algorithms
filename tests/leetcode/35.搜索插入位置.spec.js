import { searchInsert } from "../../leetcode/35.搜索插入位置.js";

describe("leetCode测试用例", () => {
    test("[1,3,5,6],5", () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    });

    test("[1,3,5,6],2", () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    });

    test("[1,3,5,6],7", () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    });

    test("[1,3,5,6],0", () => {
        expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
    });

    test("[1],0", () => {
        expect(searchInsert([1], 0)).toBe(0);
    });
});

describe("自定义", () => {
    test("[1,2],1", () => {
        expect(searchInsert([1, 2], 1)).toBe(0);
    });

    test("[1,2],2", () => {
        expect(searchInsert([1, 2], 2)).toBe(1);
    });

    test("[1,2],0", () => {
        expect(searchInsert([1, 2], 0)).toBe(0);
    });

    test("[1,2],3", () => {
        expect(searchInsert([1, 2], 3)).toBe(2);
    });
});

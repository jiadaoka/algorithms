import { searchRange } from "../../leetcode/34.在排序数组中查找元素的第一个和最后一个位置.js";

describe("leetCode测试用例", () => {
    test("[2,2],2", () => {
        expect(searchRange([2, 2], 2)).toStrictEqual([0, 1]);
    });

    test("[5,7,7,8,8,10],6", () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1]);
    });

    test("[],0", () => {
        expect(searchRange([], 0)).toStrictEqual([-1, -1]);
    });

    test("[5,7,7,8,8,10],8", () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4]);
    });
});

describe("自定义", () => {
    test("[1,2],1", () => {
        expect(searchRange([1, 2], 1)).toStrictEqual([0, 0]);
    });

    test("[1,2],2", () => {
        expect(searchRange([1, 2], 2)).toStrictEqual([1, 1]);
    });
});

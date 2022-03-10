import { search } from "../../leetcode/33.搜索旋转排序数组.js";

describe("leetCode测试用例", () => {
    test("[1,2,3,4],3", () => {
        expect(search([1, 2, 3, 4], 3)).toBe(2);
    });

    test("[5,1,3],3", () => {
        expect(search([5, 1, 3], 3)).toBe(2);
    });

    test("[4,5,6,7,0,1,2],0", () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    });

    test("[4,5,6,7,0,1,2],3", () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    });
});

describe("两个元素倒序", () => {
    test("[2,1],3", () => {
        expect(search([2, 1], 3)).toBe(-1);
    });

    test("[2,1],1", () => {
        expect(search([2, 1], 1)).toBe(1);
    });

    test("[2,1],2", () => {
        expect(search([2, 1], 2)).toBe(0);
    });

    test("[2,1],0", () => {
        expect(search([2, 1], 0)).toBe(-1);
    });
});

describe("两个元素正序", () => {
    test("[1,2],1", () => {
        expect(search([1, 2], 1)).toBe(0);
    });

    test("[1,2],2", () => {
        expect(search([1, 2], 2)).toBe(1);
    });

    test("[1,2],3", () => {
        expect(search([1, 2], 3)).toBe(-1);
    });

    test("[1,2],0", () => {
        expect(search([1, 2], 0)).toBe(-1);
    });
});

describe("只有一个元素", () => {
    test("[1],1", () => {
        expect(search([1], 1)).toBe(0);
    });

    test("[1],0", () => {
        expect(search([1], 0)).toBe(-1);
    });
});

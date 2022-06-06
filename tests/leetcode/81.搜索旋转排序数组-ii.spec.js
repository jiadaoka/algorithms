import { search } from "../../leetcode/81.搜索旋转排序数组-ii.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toBe(true);
    });

    test("用例2", () => {
        expect(
            search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)
        ).toBe(true);
    });

    test("用例3", () => {
        expect(search([2, 5, 6, 0, 0, 1, 2], 3)).toBe(false);
    });

    test("用例4", () => {
        expect(
            search(
                [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1,
                ],
                13
            )
        ).toBe(true);
    });
});

describe("自定义", () => {});

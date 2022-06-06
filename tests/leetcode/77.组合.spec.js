import { combine } from "../../leetcode/77.组合.js";
import { combination } from "../tools.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        const result = combine(4, 2);
        const len = combination(2, 4);
        expect(result).toStrictEqual(
            expect.arrayContaining([
                [1, 2],
                [1, 3],
                [1, 4],
                [2, 3],
                [2, 4],
                [3, 4],
            ])
        );

        expect(result).toHaveLength(len);
    });

    test("用例2", () => {
        const result = combine(1, 1);
        expect(result).toStrictEqual(expect.arrayContaining([[1]]));
        expect(result).toHaveLength(1);
    });
});

describe("自定义", () => {
    test("用例1", () => {
        const result = combine(4, 3);
        expect(result).toStrictEqual(
            expect.arrayContaining([
                [1, 2, 3],
                [1, 2, 4],
                [1, 3, 4],
                [2, 3, 4],
            ])
        );

        expect(result).toHaveLength(4);
    });

    test("用例2", () => {
        const result = combine(4, 4);
        expect(result).toStrictEqual(expect.arrayContaining([[1, 2, 3, 4]]));

        expect(result).toHaveLength(1);
    });

    test("用例3", () => {
        const result = combine(6, 3);
        const len = combination(3, 6);
        expect(result).toStrictEqual(
            expect.arrayContaining([
                [1, 2, 3],
                [1, 2, 4],
                [1, 2, 5],
                [1, 2, 6],
                [1, 3, 4],
                [1, 3, 5],
                [1, 3, 6],
                [1, 4, 5],
                [1, 4, 6],
                [1, 5, 6],
                [2, 3, 4],
                [2, 3, 5],
                [2, 3, 6],
                [2, 4, 5],
                [2, 4, 6],
                [2, 5, 6],
                [3, 4, 5],
                [3, 4, 6],
                [3, 5, 6],
                [4, 5, 6],
            ])
        );

        expect(result).toHaveLength(len);
    });
});

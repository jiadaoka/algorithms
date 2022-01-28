import { threeSum } from "../../leetcode/15.三数之和.js";

describe("15.三数之和", () => {
    test("[1,-1,-1,0]", () => {
        const result = expect.arrayContaining([
            expect.arrayContaining([-1, 0, 1]),
        ]);
        const arr = threeSum([1, -1, -1, 0]);

        expect(arr).toStrictEqual(result);
        expect(arr).toHaveLength(1);
    });

    test("[0,0,0]", () => {
        const arr = threeSum([0, 0, 0]);

        expect(arr).toStrictEqual([[0, 0, 0]]);
    });

    test("[-1,0,1,2,-1,-4]", () => {
        const result = expect.arrayContaining([
            expect.arrayContaining([-1, -1, 2]),
            expect.arrayContaining([-1, 0, 1]),
        ]);
        const arr = threeSum([-1, 0, 1, 2, -1, -4]);

        expect(arr).toStrictEqual(result);
        expect(arr).toHaveLength(2);
    });

    test("[0,1,1]", () => {
        const arr = threeSum([0, 1, 1]);

        expect(arr).toStrictEqual([]);
    });

    test("[]", () => {
        expect(threeSum([])).toStrictEqual([]);
    });

    test("[0]", () => {
        expect(threeSum([0])).toStrictEqual([]);
    });
});

import { nextPermutation } from "../../leetcode/31.下一个排列.js";

describe("31.下一个排列", () => {
    test("[4,2,0,2,3,2,0]", () => {
        const arr = nextPermutation([4, 2, 0, 2, 3, 2, 0]);
        expect(arr).toStrictEqual([4, 2, 0, 3, 0, 2, 2]);
    });

    test("[1,3,2]", () => {
        const arr = nextPermutation([1, 3, 2]);
        expect(arr).toStrictEqual([2, 1, 3]);
    });

    test("[1,2,3]", () => {
        const arr = nextPermutation([1, 2, 3]);
        expect(arr).toStrictEqual([1, 3, 2]);
    });

    test("[2,3,1]", () => {
        const arr = nextPermutation([2, 3, 1]);
        expect(arr).toStrictEqual([3, 1, 2]);
    });

    test("[3,2,1]", () => {
        const arr = nextPermutation([3, 2, 1]);
        expect(arr).toStrictEqual([1, 2, 3]);
    });

    test("[1,1,5]", () => {
        const arr = nextPermutation([1, 1, 5]);
        expect(arr).toStrictEqual([1, 5, 1]);
    });
});

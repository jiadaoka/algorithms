import { removeDuplicates } from "../../leetcode/26.删除有序数组中的重复项.js";

describe("26.删除有序数组中的重复项", () => {
    test("[1,2]", () => {
        const input = [1, 2];
        const len = removeDuplicates(input);
        const result = [];
        for (let i = 0; i < len; i++) {
            result.push(input[i]);
        }
        expect(result).toStrictEqual([1, 2]);
    });
});

import { rotateRight } from "../../leetcode/61.旋转链表.js";
import { generateListNode, listNodeToArray } from "../tools.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        const input = generateListNode([1, 2, 3, 4, 5]);
        const output = [4, 5, 1, 2, 3];
        const result = listNodeToArray(rotateRight(input, 2));
        expect(result).toStrictEqual(output);
    });
    test("用例2", () => {
        const input = generateListNode([0, 1, 2]);
        const output = [2, 0, 1];
        const result = listNodeToArray(rotateRight(input, 4));
        expect(result).toStrictEqual(output);
    });
});

describe("自定义", () => {});

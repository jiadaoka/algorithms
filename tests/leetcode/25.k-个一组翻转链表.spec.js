import { reverseKGroup } from "../../leetcode/25.k-个一组翻转链表.js";
import { generateListNode } from "../tools.js";

describe("25.k-个一组翻转链表", () => {
    test("head = [1,2,3,4,5], k = 2", () => {
        const output = [2, 1, 4, 3, 5];
        const input = [1, 2, 3, 4, 5];

        const head = generateListNode(input);
        const result = reverseKGroup(head, 2);

        let outputNode = result;
        let idx = 0;
        while (outputNode) {
            expect(outputNode.val).toBe(output[idx]);
            idx++;
            outputNode = outputNode.next;
        }

        expect(idx).toBe(output.length);
    });
});

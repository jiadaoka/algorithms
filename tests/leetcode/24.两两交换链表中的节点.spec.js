import { swapPairs } from "../../leetcode/24.两两交换链表中的节点.js";
import { ListNode } from "../tools.js";

describe("24.两两交换链表中的节点", () => {
    test("[1,2,3,4]", () => {
        const input = [1, 2, 3, 4];
        const output = [2, 1, 4, 3];
        const len = input.length;

        const inputListNode = new ListNode(1);
        let inputNode = inputListNode;

        for (let i = 1; i < len; i++) {
            inputNode.next = new ListNode(input[i]);
            inputNode = inputNode.next;
        }

        const result = swapPairs(inputListNode);
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

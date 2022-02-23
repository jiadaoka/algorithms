/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let result = new ListNode(null, head);
    let lastGroupEnd = result;
    let idx = 0;
    let node = head;
    while (node) {
        idx++;
        if (idx % k === 0) {
            let startNode = lastGroupEnd.next;
            let cNode = startNode;
            let lastNode = node.next;
            for (let i = 0; i < k; i++) {
                let nextNode = cNode.next;
                cNode.next = lastNode;

                lastNode = cNode;
                cNode = nextNode;
            }

            lastGroupEnd.next = node;
            lastGroupEnd = startNode;
            node = startNode.next;
        } else {
            node = node.next;
        }
    }

    return result.next;
};
// @lc code=end
export { reverseKGroup };

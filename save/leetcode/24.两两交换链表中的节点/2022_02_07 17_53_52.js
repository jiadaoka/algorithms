/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let result = head;
    let before = null;
    let after = null;
    let node = result;
    let idx = 0;

    while (node) {
        if (idx & 1) {
            if (idx === 1) {
                result = node;
            } else {
                after.next = node;
            }

            before.next = node.next;
            node.next = before;

            after = before;
            node = before.next;
        } else {
            before = node;
            node = node.next;
        }

        idx++;
    }

    return result;
};
// @lc code=end

export { swapPairs };

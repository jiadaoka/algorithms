/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let before = null; // 目标上一个节点
    let after = null; // 目标下一个节点

    let curNode = head;
    let idx = 0;
    while (curNode) {
        idx++; // 遍历到第几个
        if (idx === n - 1) {
            after = head;
        } else if (idx > n - 1) {
            if (n !== 1) after = after.next;

            if (idx === n + 1) {
                before = head;
            } else if (idx > n + 1) {
                before = before.next;
            }
        }

        curNode = curNode.next;
    }

    if (idx > n) {
        before.next = after;
    } else if (idx === n) {
        head = head.next;
    }

    return head;
};
// @lc code=end
export { removeNthFromEnd };

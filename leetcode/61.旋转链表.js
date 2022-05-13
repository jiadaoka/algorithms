/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let b = head; // 断裂位置

    let cur = head;
    let end = head;
    let total = 0;

    // 计算总个数，获取最后一个节点
    while (cur) {
        total++;
        end = cur;
        cur = cur.next;
    }

    k = total - (k % total) - 1;
    let idx = 0;
    while (idx < total) {
        if (idx < k) {
            b = b.next;
        }

        idx++;
    }

    let result = head;
    if (b?.next) {
        result = b.next;
        end.next = head;
        b.next = null;
    }

    return result;
};
// @lc code=end
export { rotateRight };

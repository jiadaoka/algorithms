/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let process = new ListNode();
    const result = new ListNode(0, process);
    let adv = 0;
    let node1 = l1,
        node2 = l2;

    while (true) {
        let r = node1.val + node2.val + adv;
        if (r > 9) {
            adv = 1;
            r -= 10;
        } else {
            adv = 0;
        }

        process.val = r;

        node1 = node1.next;
        node2 = node2.next;

        if (!node1 || !node2) {
            if (adv) {
                if (node1) {
                    node2 = new ListNode(1);
                    adv = 0;
                } else if (node2) {
                    node1 = new ListNode(1);
                    adv = 0;
                } else {
                    process.next = new ListNode(1);
                    break;
                }
            } else {
                if (node1) {
                    process.next = node1;
                } else if (node2) {
                    process.next = node2;
                }

                break;
            }
        }

        process.next = new ListNode();
        process = process.next;
    }

    return result.next;
};
// @lc code=end

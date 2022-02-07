/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const result = new ListNode(0);
    let l1 = list1;
    let l2 = list2;

    let node = result;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            node.next = l1;
            node = node.next;
            l1 = l1.next;
        } else {
            node.next = l2;
            node = node.next;
            l2 = l2.next;
        }
    }

    if (l1 && !l2) {
        node.next = l1;
    }

    if (!l1 && l2) {
        node.next = l2;
    }

    return result.next;
};
// @lc code=end

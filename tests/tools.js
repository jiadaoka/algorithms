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
 * 将数组元素作为链表值生成链表
 * @param {array} arr
 */
function generateListNode(arr) {
    const inputListNode = new ListNode(arr[0]);
    const len = arr.length;
    let inputNode = inputListNode;

    for (let i = 1; i < len; i++) {
        inputNode.next = new ListNode(arr[i]);
        inputNode = inputNode.next;
    }

    return inputListNode;
}

export { ListNode, generateListNode };

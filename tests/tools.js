/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @Class
 * @param {(number|object)} val
 * @param {(Null|ListNode)} next
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * 将数组元素作为链表值生成链表
 * @param {array} arr
 * @return {ListNode}
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

/**
 * 取出链表生成数组
 * TODO 只支持单链表
 * @param {ListNode} listNode
 * @return {array}
 */
function listNodeToArray(listNode) {
    const arr = [];
    let cur = listNode;
    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }

    return arr;
}

/**
 * 快速生成随机整数
 * @param {number} digit
 * @returns {number}
 */
function integerRandom(digit) {
    return Math.floor(Math.random() * Math.pow(10, digit));
}

/**
 * 排列组合
 * C(m,n) = n! / (m! * (n - m)!)
 */
function combination(m, n) {
    const result = factorial(n) / (factorial(m) * factorial(n - m));
    return result;
}

/**
 * 阶乘
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) result *= i;
    return result;
}

export {
    ListNode,
    generateListNode,
    listNodeToArray,
    integerRandom,
    combination,
    factorial,
};

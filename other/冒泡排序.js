/**
 * 冒泡排序复习
 */

/**
 * @param {number[]} list
 * @return {number[]}
 */
function bubbleSort(list) {
    const len = list.length;
    const arr = [...list];

    for (let i = 0; i < len; i++) {
        const l = len - i;
        for (let j = 0; j < l; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

export { bubbleSort };

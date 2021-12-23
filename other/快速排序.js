/**
 * 复习快速排序
 */

/**
 * @param {number[]} list
 * @return {number[]}
 */
function quickSort(list) {
    const arr = [...list];
    const len = list.length;

    swap(0, len - 1, arr);

    return arr;
}

function swap(left, right, list) {
    if (left > right) return;

    const bNum = list[left];
    let i = left;
    let j = right;
    while (i !== j) {
        while (list[j] >= bNum && i < j) {
            j--;
        }

        while (list[i] <= bNum && i < j) {
            i++;
        }

        if (i < j) {
            [list[i], list[j]] = [list[j], list[i]];
        }
    }

    [list[left], list[i]] = [list[i], list[left]];
    console.log(list);

    swap(left, i - 1, list);
    swap(i + 1, right, list);
}

export { quickSort };

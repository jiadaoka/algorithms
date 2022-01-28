/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const result = [];

    if (nums.length < 4) {
        return result;
    }

    nums.sort((a, b) => a - b);
    const len = nums.length;
    const sumMapping = new Map();
    for (let i = 0; i < len; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len; j++) {
            if (nums[j] === nums[j - 1] && j !== i + 1) {
                continue;
            }
            const sum = nums[i] + nums[j];
            if (target > 0 && sum > target) {
                break;
            }
            if (sumMapping.has(sum)) {
                const a = sumMapping.get(sum);
                a.push([i, j]);
            } else {
                sumMapping.set(sum, [[i, j]]);
            }
        }
    }

    sumMapping.forEach((mapping, sum) => {
        const mapLen = mapping.length;
        for (let i = 0; i < mapLen; i++) {
            const cur = mapping[i];
            let left = cur[1] + 1;
            let right = len - 1;

            while (left < right) {
                if (nums[left] === nums[left - 1] && left !== cur[1] + 1) {
                    left++;
                    continue;
                }

                if (nums[right] === nums[right + 1]) {
                    right--;
                    continue;
                }

                const s = sum + nums[left] + nums[right];

                if (s > target) {
                    right--;
                } else if (s < target) {
                    left++;
                } else {
                    const a = cur.map((e) => nums[e]);
                    result.push([...a, nums[left], nums[right]]);
                    right--;
                    left++;
                }
            }
        }
    });

    return result;
};
// @lc code=end

export { fourSum };

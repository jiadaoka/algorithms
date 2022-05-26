import { sortColors } from "../../leetcode/75.颜色分类.js";
import { integerRandom } from "../tools.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        const arr = [2, 0, 2, 1, 1, 0];
        sortColors(arr);
        expect(arr).toStrictEqual([0, 0, 1, 1, 2, 2]);
    });
    test("用例2", () => {
        const arr = [2, 0, 1];
        sortColors(arr);
        expect(arr).toStrictEqual([0, 1, 2]);
    });
});

describe("自定义", () => {
    for (let i = 0; i < 10; i++) {
        const map = new Map();
        const result = [];
        for (let i = 0; i <= 2; i++) {
            const n = integerRandom(2);
            map.set(i, n);
            for (let j = 0; j < n; j++) {
                result.push(i);
            }
        }
        const len = result.length;
        const arr = [];
        while (arr.length < len) {
            const n = Math.floor(Math.random() * 3);
            const s = map.get(n);
            if (s > 0) {
                map.set(n, s - 1);
                arr.push(n);
            }
        }
        test("用例" + (i + 1), () => {
            sortColors(arr);
            expect(arr).toStrictEqual(result);
        });
    }
});

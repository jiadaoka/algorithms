import { mySqrt } from "../../leetcode/69.x-的平方根.js";
import { integerRandom } from "../tools.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(mySqrt(8)).toBe(2);
    });
});

describe("自定义", () => {
    for (let i = 0; i < 100; i++) {
        const num = integerRandom(5);
        const result = Math.floor(num ** 0.5);

        test("用例" + (i + 1) + "：" + num + "=>" + result, () => {
            expect(mySqrt(num)).toBe(result);
        });
    }
});

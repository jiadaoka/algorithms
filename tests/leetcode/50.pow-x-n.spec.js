import { myPow } from "../../leetcode/50.pow-x-n.js";

describe("leetCode测试用例", () => {
    const samples = [
        [2, 10],
        [2.1, 3],
        [2.0, -2],
    ];
    const len = samples.length;

    for (let i = 0; i < len; i++) {
        const sample = samples[i];
        test("用例" + (i + 1), () => {
            const output = Math.pow(sample[0], sample[1]);
            expect(myPow(sample[0], sample[1])).toBe(output);
        });
    }
});

describe("自定义", () => {});

import { canJump } from "../../leetcode/55.跳跃游戏.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(canJump([2, 3, 1, 1, 4])).toBe(true);
    });

    test("用例2", () => {
        expect(canJump([3, 2, 1, 0, 4])).toBe(false);
    });
});

describe("自定义", () => {});
